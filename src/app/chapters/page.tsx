'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const novels = [
    {
        slug: 'entre-a-luz-e-a-escuridao',
        title: 'Entre a Luz e a Escuridão',
        jp: '光と闇の間',
        cover: '/capa1.jpeg',
        chapters: [
            { id: 1, title: 'Começos', description: 'Nicole se sente perdida no primeiro dia de aula até conhecer Nick.', date: '10 de Abril, 2025' },
            { id: 2, title: 'Caminhos que se Cruzam', description: 'Nicole está confusa com a navegação do campus quando Nick a encontra novamente.', date: '10 de Abril, 2025' },
            { id: 3, title: 'Uma pausa entre aulas', description: 'Nicole e Nick compartilham um momento tranquilo durante um intervalo.', date: '10 de Abril, 2025' },
        ]
    },
    {
        slug: 'hidden-lines',
        title: 'Hidden Lines',
        jp: '隠れた線',
        cover: '/capa2.jpeg',
        chapters: [
            { id: 1, title: 'Primeiras Sombras', description: 'O mistério começa a se desenrolar entre os protagonistas.', date: '10 de Abril, 2025' },
            { id: 2, title: 'Linhas Cruzadas', description: 'Descobertas inesperadas conectam passado e presente.', date: '10 de Abril, 2025' },
        ]
    }
];

export default function ChaptersPage() {
    const [selected, setSelected] = useState(novels[0].slug)
    const [search, setSearch] = useState('')
    const novel = novels.find(n => n.slug === selected)
    const filtered = novel ? novel.chapters.filter(c => c.title.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase())) : []

    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
                <Link href="/" className="flex items-center text-gray-500 hover:text-primary transition mr-4">
                    <span className="mr-2">←</span>
                    Voltar
                </Link>
                <h1 className="text-3xl font-bold">Capítulos</h1>
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> parent of b574f99 (att)
=======
>>>>>>> parent of b574f99 (att)
            </div>
            <div className="flex gap-4 mb-6">
                {novels.map(n => (
                    <button key={n.slug} onClick={() => setSelected(n.slug)} className={`px-4 py-2 rounded-md font-semibold border transition ${selected === n.slug ? 'bg-primary text-white border-primary' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-primary/10'}`}>{n.title}</button>
=======
            <div className="flex gap-4 mb-6">
                {novels.map(n => (
                    <button key={n.slug} onClick={() => setSelected(n.slug)} className={`px-4 py-2 rounded-full font-bold border-2 transition text-lg shadow-sm ${selected === n.slug ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-200 border-indigo-200 dark:border-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/40'}`}>{n.title}</button>
>>>>>>> parent of 5a3d9c6 (att)
                ))}
            </div>
            <input
                type="text"
                placeholder="Buscar capítulo..."
                value={search}
                onChange={e => setSearch(e.target.value)}
<<<<<<< HEAD
                className="w-full mb-8 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
=======
                className="w-full mb-8 px-4 py-2 rounded-lg border-2 border-indigo-200 dark:border-indigo-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-400 outline-none shadow"
>>>>>>> parent of 5a3d9c6 (att)
            />
            <div className="grid gap-6">
                {novel && filtered.map(chapter => (
                    <Link key={chapter.id} href={selected === 'hidden-lines' ? `/chapters/hidden-lines/${chapter.id}` : `/chapters/${chapter.id}`}>
<<<<<<< HEAD
                        <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition p-4">
                            <Image src={novel.cover} alt={novel.title} width={48} height={64} className="rounded mr-4" />
                            <div>
                                <div className="font-bold text-lg">{chapter.title}</div>
=======
                        <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border-2 border-indigo-100 dark:border-indigo-700 hover:scale-[1.02] hover:shadow-xl transition p-4 group cursor-pointer">
                            <Image src={novel.cover} alt={novel.title} width={48} height={64} className="rounded mr-4 shadow" />
                            <div>
                                <div className="font-bold text-lg text-indigo-700 dark:text-indigo-300 group-hover:underline">{chapter.title}</div>
>>>>>>> parent of 5a3d9c6 (att)
                                <div className="text-gray-600 dark:text-gray-400 text-sm">{chapter.description}</div>
                                <div className="text-xs text-gray-400 mt-1">{chapter.date}</div>
                            </div>
                        </div>
                    </Link>
                ))}
                {(!novel || filtered.length === 0) && <div className="text-center text-gray-500 py-12">Nenhum capítulo encontrado.</div>}
            </div>
        </div>
    )
} 