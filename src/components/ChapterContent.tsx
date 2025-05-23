'use client'

import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Interfaces para os tipos de dados
interface ChapterProps {
    id: number
    title: string
    content: string
    date: string
    totalChapters: number
}

const ChapterContent = ({ id, title, content, date, totalChapters }: ChapterProps) => {
    const [fontSize, setFontSize] = useState<number>(18)

    // Função para aumentar o tamanho da fonte
    const increaseFontSize = () => {
        if (fontSize < 24) {
            setFontSize(fontSize + 2)
        }
    }

    // Função para diminuir o tamanho da fonte
    const decreaseFontSize = () => {
        if (fontSize > 14) {
            setFontSize(fontSize - 2)
        }
    }

    // Formatar o conteúdo, processando quebras de linha
    const formatContent = (content: string) => {
        return content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="my-4">{paragraph}</p>
        ))
    }

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Cabeçalho */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        <Link
                            href="/chapters"
                            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition flex items-center font-semibold"
                        >
                            <FiChevronLeft className="mr-1" />
                            Voltar para capítulos
                        </Link>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={decreaseFontSize}
                                className="p-2 rounded-md bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-200 font-bold transition"
                                aria-label="Diminuir fonte"
                            >
                                A-
                            </button>
                            <button
                                onClick={increaseFontSize}
                                className="p-2 rounded-md bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-200 font-bold transition"
                                aria-label="Aumentar fonte"
                            >
                                A+
                            </button>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold mt-6 mb-2 text-indigo-700 dark:text-indigo-300">
                        Capítulo {id} — &ldquo;{title}&rdquo;
                    </h1>
                    <div className="text-gray-500 dark:text-gray-400">
                        Publicado em {date}
                    </div>
                </div>

                {/* Conteúdo do capítulo */}
                <div
                    className="chapter-content prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-900 rounded-xl p-6 shadow border-2 border-indigo-100 dark:border-indigo-800"
                    style={{ fontSize: `${fontSize}px` }}
                >
                    {formatContent(content)}
                </div>

                {/* Navegação entre capítulos */}
                <div className="mt-12 pt-6 border-t border-indigo-200 dark:border-indigo-800 flex justify-between">
                    {id > 1 ? (
                        <Link
                            href={`/chapters/${id - 1}`}
                            className="flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-200 font-bold rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition shadow"
                        >
                            <FiChevronLeft className="mr-1" />
                            Capítulo anterior
                        </Link>
                    ) : (
                        <div></div>
                    )}

                    {id < totalChapters && (
                        <Link
                            href={`/chapters/${id + 1}`}
                            className="flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-200 font-bold rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition shadow"
                        >
                            Próximo capítulo
                            <FiChevronRight className="ml-1" />
                        </Link>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default ChapterContent 