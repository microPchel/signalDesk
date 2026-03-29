import { fetchAllHNResults } from "@/lib/hnApi";

export default async function HNPage() {
    const result = await fetchAllHNResults({
        query: "nextjs",
        tags: "story",
        byDate: true,
        hitsPerPage: 100,
    });

    return (
        <main style={{ padding: "24px" }}>
            <h1>HN results</h1>
            <p>Найдено всего: {result.nbHits}</p>
            <p>Собрано в массив: {result.hits.length}</p>

            <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
                {result.hits.map((post) => (
                    <article
                        key={post.objectID}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "12px",
                            padding: "16px",
                        }}
                    >
                        <h2 style={{ marginBottom: "8px" }}>
                            {post.title || post.story_title || "Без названия"}
                        </h2>

                        <p>Автор: {post.author ?? "unknown"}</p>
                        <p>Очки: {post.points ?? 0}</p>
                        <p>Комментарии: {post.num_comments ?? 0}</p>
                        <p>Дата: {post.created_at ?? "unknown"}</p>

                        {post.url ? (
                            <a href={post.url} target="_blank" rel="noreferrer">
                                Открыть ссылку
                            </a>
                        ) : (
                            <span>Внешней ссылки нет</span>
                        )}
                    </article>
                ))}
            </div>
        </main>
    );
}