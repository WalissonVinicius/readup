import Link from 'next/link'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-indigo-100 via-white to-white dark:from-indigo-900 dark:via-gray-950 dark:to-gray-950 border-t border-indigo-200 dark:border-indigo-800 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="md:flex md:items-center md:justify-between gap-8">
                    <div className="flex items-center mb-6 md:mb-0">
                        <span className="font-bold text-2xl text-indigo-700 dark:text-indigo-300 tracking-tight">ReadUp</span>
                        <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">Portal brasileiro de light novels</span>
                    </div>
                    <div className="flex gap-6 mb-6 md:mb-0">
                        <Link href="/" className="text-sm text-indigo-700 dark:text-indigo-300 hover:underline font-semibold">Início</Link>
                        <Link href="/chapters" className="text-sm text-indigo-700 dark:text-indigo-300 hover:underline font-semibold">Capítulos</Link>
                        <Link href="/about/entre-a-luz-e-a-escuridao" className="text-sm text-indigo-700 dark:text-indigo-300 hover:underline font-semibold">Entre a Luz e a Escuridão</Link>
                        <Link href="/about/hidden-lines" className="text-sm text-indigo-700 dark:text-indigo-300 hover:underline font-semibold">Hidden Lines</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://www.instagram.com/nicklodeon2207/" className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-white transition" target="_blank" rel="noopener noreferrer">
                            <span className="sr-only">Instagram</span>
                            <FiInstagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-indigo-200 dark:border-indigo-800 pt-6 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} ReadUp. Desenvolvido por <a href="https://github.com/WalissonVinicius" className="text-indigo-700 dark:text-indigo-300 hover:underline">Walisson Vinicius</a>.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 