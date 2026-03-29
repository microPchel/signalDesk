export default function Container({ children }: {children: React.ReactNode}) {
    return (
        <>
            <div className="flex m-15 border p-6 shadow-sm leading-6 border-gray-200 max-w-2xl rounded-2xl max-h-2xl">
                {children }
            </div>
        </>
    )
}