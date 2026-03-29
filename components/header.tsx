import Link from "next/link";
import Image from "next/image";
export default function Header() {
    return (
        <>
            <div className="text-3xl">
                The main page
            </div>
            <div className="flex row justify-center items-center gap-6">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={140}
                    height={140}
                />
                <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">
                    Search
                </button>
                <input
                    type="text"
                    placeholder="write text"
                    className="rounded-xl border-gray-300 focus:border-black"
                >
                </input>
                <nav>
                    <Link href="/item">item</Link>
                    <Link href="/">Home</Link>
                    <Link href="/explore">About</Link>
                </nav>
            </div>
        </>
    )
}