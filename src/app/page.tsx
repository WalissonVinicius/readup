import Link from 'next/link'
import Image from 'next/image'

const novels = [
  {
    slug: 'entre-a-luz-e-a-escuridao',
    title: 'Entre a Luz e a Escuridão',
    jp: '光と闇の間',
    cover: '/capa1.jpeg',
    description: 'Uma história sobre amizade, descobertas e sentimentos que crescem silenciosamente entre duas pessoas.',
    readUrl: '/chapters/entre-a-luz-e-a-escuridao',
    aboutUrl: '/about/entre-a-luz-e-a-escuridao',
    latest: [
      { id: 1, title: 'Começos', date: '10 de Abril, 2025', desc: 'Nicole se sente perdida no primeiro dia de aula até conhecer Nick.' },
      { id: 2, title: 'Caminhos que se Cruzam', date: '10 de Abril, 2025', desc: 'Nicole está confusa com a navegação do campus quando Nick a encontra novamente.' },
    ]
  },
  {
    slug: 'hidden-lines',
    title: 'Hidden Lines',
    jp: '隠れた線',
    cover: '/capa2.jpeg',
    description: 'Uma história sobre segredos, descobertas e as linhas que conectam passado e presente.',
    readUrl: '/chapters/hidden-lines',
    aboutUrl: '/about/hidden-lines',
    latest: [
      { id: 1, title: 'Primeiras Sombras', date: '10 de Abril, 2025', desc: 'O mistério começa a se desenrolar entre os protagonistas.' },
      { id: 2, title: 'Linhas Cruzadas', date: '10 de Abril, 2025', desc: 'Descobertas inesperadas conectam passado e presente.' },
    ]
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero ReadUp */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-500 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">ReadUp</h1>
          <p className="text-2xl md:text-3xl font-medium mb-6 drop-shadow">Seu portal brasileiro de light novels</p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">Descubra histórias originais, mergulhe em universos únicos e acompanhe capítulos inéditos de autores nacionais.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#novels" className="px-8 py-3 bg-white text-indigo-700 font-bold rounded-lg shadow hover:bg-indigo-100 transition text-lg">Explorar novels</a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </section>

      {/* Novels Section */}
      <section id="novels" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/10 dark:to-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {novels.map((novel) => (
            <div key={novel.slug} className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-indigo-100 dark:border-indigo-700 overflow-hidden hover:scale-[1.025] hover:shadow-2xl transition-all duration-300">
              <div className="relative w-full aspect-[2/3] max-w-[340px] mx-auto mt-8 shadow-lg">
                <Image src={novel.cover} alt={`Capa de ${novel.title}`} fill className="object-cover rounded-lg" sizes="(max-width: 768px) 100vw, 340px" priority />
              </div>
              <div className="flex-1 flex flex-col justify-between p-8">
                <div>
                  <h2 className="text-2xl font-bold text-center mb-2 text-indigo-700 dark:text-indigo-300">
                    <span className="font-noto-sans-jp">{novel.jp}</span>
                    <span className="block text-gray-600 dark:text-gray-400 text-lg">{novel.title}</span>
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-6">{novel.description}</p>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <Link href={novel.readUrl} className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition text-center shadow">Começar a ler</Link>
                  <Link href={novel.aboutUrl} className="px-6 py-3 bg-white/10 text-indigo-700 dark:text-indigo-200 font-medium rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition text-center border border-indigo-200 dark:border-indigo-700">Saiba mais</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Últimos Capítulos */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700 dark:text-indigo-300">Últimos Capítulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {novels.map((novel) => (
              <div key={novel.slug} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border border-indigo-100 dark:border-indigo-700">
                <div className="flex items-center mb-4">
                  <Image src={novel.cover} alt={`Capa de ${novel.title}`} width={48} height={64} className="rounded shadow mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">{novel.title}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-noto-sans-jp">{novel.jp}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {novel.latest.map((cap) => (
                    <Link key={cap.id} href={`${novel.readUrl}/${cap.id}`} className="block p-4 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition">
                      <div className="font-bold">{cap.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{cap.desc}</div>
                      <div className="text-xs text-gray-400 mt-1">{cap.date}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Portal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-300">Sobre o ReadUp</h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            O ReadUp é um portal brasileiro dedicado a light novels originais. Aqui você encontra histórias envolventes, personagens marcantes e uma experiência de leitura inspirada na cultura japonesa. Explore, leia e acompanhe as novidades das suas novels favoritas!
          </p>
        </div>
      </section>
    </div>
  )
}
