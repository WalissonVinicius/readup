import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'
import { BiBook } from 'react-icons/bi'

export default function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
                <Link href="/" className="flex items-center text-gray-500 hover:text-primary transition mr-4">
                    <FiArrowLeft className="mr-2" />
                    Voltar
                </Link>
                <h1 className="text-3xl font-bold">Sobre a Light Novel</h1>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Coluna da esquerda - Capa e Detalhes */}
                    <div className="md:w-1/3 flex flex-col gap-6">
                        {/* Capa do livro */}
                        <div className="relative w-full aspect-[2/3] max-w-[280px] mx-auto shadow-xl">
                            <Image
                                src="/capa1.jpeg"
                                alt="Capa de Entre a Luz e a Escuridão"
                                fill
                                className="object-cover rounded-md"
                                sizes="(max-width: 768px) 100vw, 280px"
                                priority
                            />
                        </div>

                        {/* Detalhes do livro */}
                        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg">
                            <h3 className="font-bold text-lg mb-4">Detalhes</h3>

                            <div className="space-y-3">
                                <div>
                                    <span className="text-gray-500 dark:text-gray-400 block text-sm">Título Original</span>
                                    <span className="font-noto-sans-jp">光と闇の間</span>
                                </div>

                                <div>
                                    <span className="text-gray-500 dark:text-gray-400 block text-sm">Título Traduzido</span>
                                    <span>Entre a Luz e a Escuridão</span>
                                </div>

                                <div>
                                    <span className="text-gray-500 dark:text-gray-400 block text-sm">Autor</span>
                                    <span>Nicolas</span>
                                </div>

                                <div>
                                    <span className="text-gray-500 dark:text-gray-400 block text-sm">Data de Publicação</span>
                                    <div className="flex items-center mt-1 space-x-2 text-gray-700 dark:text-gray-300">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <span>10 de Abril, 2025</span>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-gray-500 dark:text-gray-400 block text-sm">Gêneros</span>
                                    <span>Romance, Slice of Life, Drama</span>
                                </div>

                                <div>
                                    <span className="text-gray-500 dark:text-gray-400 block text-sm">Capítulos</span>
                                    <span>25 (Completos)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna da direita - Informações da novel */}
                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold mb-4">
                            <span className="font-noto-sans-jp">光と闇の間</span>
                            <span className="ml-2 text-gray-600 dark:text-gray-400">(Entre a Luz e a Escuridão)</span>
                        </h2>

                        <div className="prose dark:prose-invert max-w-none">
                            <p>
                                Uma light novel que narra a história de Nick e Nicole, dois estudantes universitários cujos caminhos se cruzam no primeiro dia de aula. O que começa como encontros casuais pelos corredores da universidade, aos poucos, se transforma em algo mais profundo.
                            </p>

                            <p>
                                Em um estilo que lembra animes slice of life como &ldquo;Horimiya&rdquo; e &ldquo;Kimi ni Todoke&rdquo;, a obra explora como relacionamentos se desenvolvem nos pequenos momentos: nas conversas entre aulas, nos silêncios compartilhados e nas coincidências que, talvez, não sejam tão acidentais.
                            </p>

                            <p>
                                Quando Yuna, uma figura do passado de Nick, reaparece inesperadamente, os sentimentos que ambos tentam ignorar começam a vir à tona. Entre a luz das novas possibilidades e a sombra das antigas lembranças, Nick e Nicole precisam descobrir se o que sentem é forte o suficiente para ser nomeado.
                            </p>

                            <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6">
                                <p className="text-lg font-semibold mb-3">Sobre o Autor</p>
                                <p>
                                    Nicolas é um escritor, desenhista e roteirista apaixonado pela cultura japonesa. Com um estilo que combina a estética dos mangás e light novels japonesas com narrativas emocionais e contemplativas, ele cria histórias que exploram conexões humanas, escolhas difíceis e os pequenos momentos que mudam nossas vidas.
                                </p>
                            </div>

                            <div className="mt-8">
                                <Link
                                    href="/chapters"
                                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition"
                                >
                                    <BiBook className="mr-2" />
                                    Começar a ler a light novel
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 