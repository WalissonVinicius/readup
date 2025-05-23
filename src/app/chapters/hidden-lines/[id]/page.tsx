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
            <div className="max-w-3xl mx-auto py-12 px-4">
                <h1 className="text-2xl font-bold mb-4">Capítulo não encontrado</h1>
                <Link href="/chapters/hidden-lines" className="text-primary hover:underline">
                    Voltar para a lista de capítulos
                </Link>
            </div>
        )
    }

    // Lê o conteúdo do arquivo HL.txt
    const filePath = path.join(process.cwd(), 'HL.txt')
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const chapterContent = extractChapterContent(fileContent, chapterId)

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <div className="flex items-center mb-8">
                <Link href="/chapters/hidden-lines" className="flex items-center text-gray-500 hover:text-primary transition mr-4">
                    <FiArrowLeft className="mr-2" />
                    Voltar
                </Link>
                <h1 className="text-2xl font-bold">
                    Capítulo {chapter.id} — {chapter.title}
                </h1>
            </div>

            <div className="prose dark:prose-invert max-w-none">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <p>{chapter.content}</p>
=======
                {chapterContent.split('\n').map((paragraph, index) => (
=======
                {chapter.content.split('\n').map((paragraph, index) => (
>>>>>>> parent of 5a3d9c6 (att)
=======
                {chapterContent.split('\n').map((paragraph, index) => (
>>>>>>> parent of b574f99 (att)
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
<<<<<<< HEAD
>>>>>>> parent of b574f99 (att)
=======
>>>>>>> parent of 5a3d9c6 (att)
            </div>
        </div>
    )
} 