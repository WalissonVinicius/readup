import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { FiClock } from 'react-icons/fi'
import { hiddenLinesChapters } from './data'

export default function HiddenLinesChaptersPage() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
                <Link href="/chapters" className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition mr-4 font-semibold">
                    <span className="mr-2">←</span>
                    Voltar para capítulos
                </Link>
                <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">Hidden Lines</h1>
            </div>
            <div className="grid gap-6">
                {hiddenLinesChapters.map((chapter) => (
                    <Link
                        key={chapter.id}
                        href={`/chapters/hidden-lines/${chapter.id}`}
                        className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                                Capítulo {chapter.id} — {chapter.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                {chapter.description}
                            </p>
                        </div>
                        <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <FiClock className="mr-1" /> {chapter.date}
                            </div>
                            <div className="bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <BiChevronRight size={20} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
} 