import Image from "next/image";

type ItemProps = {
    src: string;
    alt: string;
}

export default function Item({src, alt }: ItemProps) {
    return (
        <div className="translation hover:-translate-1 focus:border-black">
            <Image
                src={src}
                alt={alt}
                width={70}
                height={70}
            />
        </div>
        
    )
}