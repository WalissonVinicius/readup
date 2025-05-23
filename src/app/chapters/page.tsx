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
            </div>
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
            </div>
        </div>
    )
} 