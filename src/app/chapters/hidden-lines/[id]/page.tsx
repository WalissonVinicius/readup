import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { hiddenLinesChapters } from '../data'
import fs from 'fs'
import path from 'path'

const extractChapterContent = (content: string, chapterNumber: number): string => {
    const chapterStart = content.indexOf(`『Hidden Lines – Capítulo ${chapterNumber}』`)
    if (chapterStart === -1) return 'Capítulo não encontrado.'

    const nextChapterStart = content.indexOf(`『Hidden Lines – Capítulo ${chapterNumber + 1}』`)
    const chapterEnd = nextChapterStart === -1 ? content.length : nextChapterStart

    return content.slice(chapterStart, chapterEnd).trim()
}

export default function HiddenLinesChapterPage({ params }: { params: { id: string } }) {
    const chapterId = parseInt(params.id)
    const chapter = hiddenLinesChapters.find(c => c.id === chapterId)

    if (!chapter) {
        return (
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">Capítulo não encontrado</h1>
                    <Link href="/chapters/hidden-lines" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition">
                        Voltar para lista de capítulos
                    </Link>
                </div>
            </div>
        )
    }

    // Lê o conteúdo do arquivo HL.txt
    const filePath = path.join(process.cwd(), 'HL.txt')
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const chapterContent = extractChapterContent(fileContent, chapterId)

    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <Link href="/chapters/hidden-lines" className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition mb-4 font-semibold">
                    <span className="mr-2">←</span>
                    Voltar para capítulos
                </Link>
                <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                    Capítulo {chapter.id} — {chapter.title}
                </h1>
                <div className="text-gray-500 dark:text-gray-400">{chapter.date}</div>
            </div>
            <div className="prose dark:prose-invert max-w-none">
<<<<<<< HEAD
                <p>{chapter.content}</p>
=======
                {chapterContent.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                    {chapterId > 1 && (
                        <Link
                            href={`/chapters/hidden-lines/${chapterId - 1}`}
                            className="text-primary hover:underline"
                        >
                            ← Capítulo Anterior
                        </Link>
                    )}
                    {chapterId < hiddenLinesChapters.length && (
                        <Link
                            href={`/chapters/hidden-lines/${chapterId + 1}`}
                            className="text-primary hover:underline"
                        >
                            Próximo Capítulo →
                        </Link>
                    )}
                </div>
>>>>>>> parent of b574f99 (att)
            </div>
        </div>
    )
} 