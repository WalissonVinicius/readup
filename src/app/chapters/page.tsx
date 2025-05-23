'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ChaptersPage() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
                <Link href="/" className="flex items-center text-gray-500 hover:text-primary transition mr-4">
                    <span className="mr-2">←</span>
                    Voltar
                </Link>
                <h1 className="text-3xl font-bold">Capítulos</h1>
            </div>
<<<<<<< HEAD
            <div className="grid md:grid-cols-2 gap-10">
                {/* Card Entre a Luz e a Escuridão */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-indigo-100 dark:border-indigo-700 p-6 flex flex-col items-center">
                    <div className="relative w-full aspect-[2/3] max-w-[200px] mx-auto mb-6 shadow-xl">
                        <Image
                            src="/capa1.jpeg"
                            alt="Capa de Entre a Luz e a Escuridão"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 200px"
                            priority
                        />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">Entre a Luz e a Escuridão</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-4">Uma light novel que narra a história de Nick e Nicole, dois estudantes universitários cujos caminhos se cruzam no primeiro dia de aula. O que começa como encontros casuais pelos corredores da universidade, aos poucos, se transforma em algo mais profundo.</p>
                    <Link href="/chapters/entre-a-luz-e-a-escuridao" className="inline-block px-6 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition shadow">Ver capítulos</Link>
                </div>
                {/* Card Hidden Lines */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-indigo-100 dark:border-indigo-700 p-6 flex flex-col items-center">
                    <div className="relative w-full aspect-[2/3] max-w-[200px] mx-auto mb-6 shadow-xl">
                        <Image
                            src="/capa2.jpeg"
                            alt="Capa de Hidden Lines"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 200px"
                            priority
                        />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">Hidden Lines</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-4">Uma light novel sobre segredos, descobertas e as linhas invisíveis que conectam passado e presente. Acompanhe personagens que precisam desvendar mistérios pessoais enquanto enfrentam desafios do cotidiano e relações complexas.</p>
                    <Link href="/chapters/hidden-lines" className="inline-block px-6 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition shadow">Ver capítulos</Link>
                </div>
=======
            <div className="flex gap-4 mb-6">
                {novels.map(n => (
                    <button key={n.slug} onClick={() => setSelected(n.slug)} className={`px-4 py-2 rounded-md font-semibold border transition ${selected === n.slug ? 'bg-primary text-white border-primary' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-primary/10'}`}>{n.title}</button>
                ))}
            </div>
            <input
                type="text"
                placeholder="Buscar capítulo..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full mb-8 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
            <div className="grid gap-6">
                {novel && filtered.map(chapter => (
                    <Link key={chapter.id} href={selected === 'hidden-lines' ? `/chapters/hidden-lines/${chapter.id}` : `/chapters/${chapter.id}`}>
                        <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition p-4">
                            <Image src={novel.cover} alt={novel.title} width={48} height={64} className="rounded mr-4" />
                            <div>
                                <div className="font-bold text-lg">{chapter.title}</div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm">{chapter.description}</div>
                                <div className="text-xs text-gray-400 mt-1">{chapter.date}</div>
                            </div>
                        </div>
                    </Link>
                ))}
                {(!novel || filtered.length === 0) && <div className="text-center text-gray-500 py-12">Nenhum capítulo encontrado.</div>}
>>>>>>> parent of b574f99 (att)
            </div>
        </div>
    )
} 