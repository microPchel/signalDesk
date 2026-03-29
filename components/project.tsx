import Image from "next/image";

export default function Project() {
    return (
        <>
            <div className="flex row">
                <div className="border bg-pink shadow-xl border-gray-300 rounded-3xl">
                    <h1>
                        Name of project
                    </h1>
                    <p>
                        Something text/description aboutn Project
                    </p>
                </div>
                <div className="border bg-pink shadow-xl border-gray-300 rounded-4xl">
                    <Image
                        src="/footer/insta.png"
                        alt="Photo"
                        width={140}
                        height={140 }
                    />
                </div>
            </div>
        </>
    )
}