import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'

export default function AboutHiddenLines() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
                <Link href="/" className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition mr-4 font-semibold">
                    <FiArrowLeft className="mr-2" />
                    Voltar
                </Link>
                <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300">Sobre Hidden Lines</h1>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-indigo-100 dark:border-indigo-700 p-6 md:p-10 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/3 flex flex-col gap-6 items-center">
                    <div className="relative w-full aspect-[2/3] max-w-[260px] mx-auto shadow-xl">
                        <Image
                            src="/capa2.jpeg"
                            alt="Capa de Hidden Lines"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 260px"
                            priority
                        />
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-5 rounded-lg w-full">
                        <h3 className="font-bold text-lg mb-4 text-indigo-700 dark:text-indigo-300">Detalhes</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <span className="text-gray-500 dark:text-gray-400 block">Título Original</span>
                                <span className="font-noto-sans-jp">隠れた線</span>
                            </div>
                            <div>
                                <span className="text-gray-500 dark:text-gray-400 block">Título Traduzido</span>
                                <span>Hidden Lines</span>
                            </div>
                            <div>
                                <span className="text-gray-500 dark:text-gray-400 block">Autor</span>
                                <span>Nicolas</span>
                            </div>
                            <div>
                                <span className="text-gray-500 dark:text-gray-400 block">Data de Publicação</span>
                                <span>10 de Abril, 2025</span>
                            </div>
                            <div>
                                <span className="text-gray-500 dark:text-gray-400 block">Gêneros</span>
                                <span>Drama, Mistério, Slice of Life</span>
                            </div>
                            <div>
                                <span className="text-gray-500 dark:text-gray-400 block">Capítulos</span>
                                <span>Em andamento</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
                            <span className="font-noto-sans-jp">隠れた線</span>
                            <span className="ml-2 text-gray-600 dark:text-gray-400">(Hidden Lines)</span>
                        </h2>
                        <div className="prose dark:prose-invert max-w-none text-lg">
                            <p>
                                Uma light novel sobre segredos, descobertas e as linhas invisíveis que conectam passado e presente. Acompanhe personagens que precisam desvendar mistérios pessoais enquanto enfrentam desafios do cotidiano e relações complexas.
                            </p>
                            <p>
                                Com uma atmosfera de mistério e drama, "Hidden Lines" explora como pequenas escolhas e segredos podem mudar o rumo de uma vida inteira.
                            </p>
                        </div>
                        <div className="border-t border-indigo-200 dark:border-indigo-700 my-6 pt-6">
                            <p className="text-lg font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Sobre o Autor</p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Nicolas é um escritor, desenhista e roteirista apaixonado pela cultura japonesa. Com um estilo que combina a estética dos mangás e light novels japonesas com narrativas emocionais e contemplativas, ele cria histórias que exploram conexões humanas, escolhas difíceis e os pequenos momentos que mudam nossas vidas.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Link
                            href="/chapters/hidden-lines"
                            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition shadow"
                        >
                            Começar a ler Hidden Lines
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 