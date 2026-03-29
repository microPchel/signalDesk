const HN_API_BASE = "https://hn.algolia.com/api/v1";

export type HNHit = {
    objectID: string;
    title?: string | null;
    url?: string | null;
    author?: string | null;
    points?: number | null;
    num_comments?: number | null;
    created_at?: string;
    story_text?: string | null;
    comment_text?: string | null;
    story_id?: number | null;
    story_title?: string | null;
};

export type HNSearchResponse = {
    hits: HNHit[];
    page: number;
    nbPages: number;
    hitsPerPage: number;
    nbHits: number;
    exhaustiveNbHits?: boolean;
};

export type FetchAllHNOptions = {
    query?: string;
    tags?: string;
    byDate?: boolean;
    hitsPerPage?: number;
    startPage?: number;
    extraParams?: Record<string, string | number | boolean>;
};

function buildUrl(
    path: string,
    params: Record<string, string | number | boolean> = {}
) {
    const url = new URL(`${HN_API_BASE}/${path}`);

    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null && value !== "") {
            url.searchParams.set(key, String(value));
        }
    }

    return url.toString();
}

async function hnRequest<T>(
    path: string,
    params: Record<string, string | number | boolean> = {}
): Promise<T> {
    const url = buildUrl(path, params);

    const response = await fetch(url, {
        method: "GET",
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        throw new Error(`HN API error: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
}

export async function fetchAllHNResults({
    query = "",
    tags = "story",
    byDate = false,
    hitsPerPage = 100,
    startPage = 0,
    extraParams = {},
}: FetchAllHNOptions = {}) {
    const endpoint = byDate ? "search_by_date" : "search";

    let page = startPage;
    const allHits: HNHit[] = [];
    const seenIds = new Set<string>();

    let meta = {
        page: 0,
        nbPages: 0,
        hitsPerPage: 0,
        nbHits: 0,
        exhaustiveNbHits: false,
    };

    while (true) {
        const data = await hnRequest<HNSearchResponse>(endpoint, {
            query,
            tags,
            page,
            hitsPerPage,
            ...extraParams,
        });

        for (const hit of data.hits) {
            if (!seenIds.has(hit.objectID)) {
                seenIds.add(hit.objectID);
                allHits.push(hit);
            }
        }

        meta = {
            page: data.page,
            nbPages: data.nbPages,
            hitsPerPage: data.hitsPerPage,
            nbHits: data.nbHits,
            exhaustiveNbHits: data.exhaustiveNbHits ?? false,
        };

        const isLastPage = page >= data.nbPages - 1;
        if (isLastPage) {
            break;
        }

        page += 1;
    }

    return {
        ...meta,
        hits: allHits,
    };
}

export async function fetchHNItemById(id: string | number) {
    if (!id) {
        throw new Error("id is required");
    }

    return hnRequest(`items/${id}`);
}