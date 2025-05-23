import Link from 'next/link'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex items-center">
                        <span className="font-noto-sans-jp text-xl font-bold text-gray-900 dark:text-white">
                            光と闇の間
                        </span>
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            Entre a Luz e a Escuridão
                        </span>
                    </div>

                    <div className="mt-8 md:mt-0">
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                            &copy; {new Date().getFullYear()} Nicolas. Todos os direitos reservados.
                        </p>
                    </div>

                    <div className="flex justify-center mt-8 md:mt-0">
                        <a href="https://www.instagram.com/nicklodeon2207/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <span className="sr-only">Instagram</span>
                            <FiInstagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-200 dark:border-gray-800 pt-6">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Desenvolvido por <a href="https://github.com/WalissonVinicius" className="text-primary hover:underline">Walisson Vinicius</a>
                        </p>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-200 dark:border-gray-800 pt-6">
                    <div className="flex justify-center space-x-6">
                        <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Início
                        </Link>
                        <Link href="/chapters" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Capítulos
                        </Link>
                        <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Sobre
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 