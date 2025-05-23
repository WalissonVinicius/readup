import Link from 'next/link'
import { chaptersMetadata } from '../data'

export default function EntreLuzEscuridaoChapterPage({ params }: { params: { id: string } }) {
    const chapterId = parseInt(params.id)
    const chapter = chaptersMetadata.find(c => c.id === chapterId)

    if (!chapter) {
        return (
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">Capítulo não encontrado</h1>
                    <Link href="/chapters/entre-a-luz-e-a-escuridao" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition">
                        Voltar para lista de capítulos
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <Link href="/chapters/entre-a-luz-e-a-escuridao" className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition mb-4 font-semibold">
                    <span className="mr-2">←</span>
                    Voltar para capítulos
                </Link>
                <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                    Capítulo {chapter.id} — {chapter.title}
                </h1>
                <div className="text-gray-500 dark:text-gray-400">{chapter.date}</div>
            </div>
            <div className="prose dark:prose-invert max-w-none">
                <p>{chapter.content}</p>
            </div>
        </div>
    )
} 