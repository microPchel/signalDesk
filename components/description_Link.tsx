export default function Description() {
    return (
        <div className="gap-6 m-25 border bg-pink p-6 shadow-sm leading-6 border-gray-200 max-w-2xl rounded-2xl">
            <h1 className="text-lg font-semibold">
                SignalDesk
            </h1>
            <p className="mt-2 text-sm">
                SignalDeck — это Next.js-приложение для просмотра и поиска постов из Hacker
                News через HN Search API от Algolia: главная страница, страница explore с
                фильтрами и поиском, динамическая страница отдельного поста, страница saved,
                свои заметки к сохранённым постам, адаптивный UI. У HN Search API есть
                официальная документация, а Next.js App Router официально поддерживает
                layouts, navigation, server/client components и route handlers — то есть
                это очень хороший формат проекта, чтобы показать именно Next.js + React, а не просто React-каталог
            </p>
        </div>
    )
}