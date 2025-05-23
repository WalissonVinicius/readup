import Link from 'next/link'
import Image from 'next/image'
import { BiChevronRight } from 'react-icons/bi'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Novels Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Novel 1 */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="relative w-full aspect-[2/3] max-w-[320px] mx-auto shadow-xl">
              <Image
                src="/capa1.jpeg"
                alt="Capa de Entre a Luz e a Escuridão"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 320px"
                priority
              />
            </div>
            <h2 className="text-2xl font-bold mt-6 mb-2 text-center">
              <span className="font-noto-sans-jp">光と闇の間</span>
              <span className="block text-gray-600 dark:text-gray-400 text-lg">Entre a Luz e a Escuridão</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
              Uma história sobre amizade, descobertas e os sentimentos que crescem silenciosamente entre duas pessoas.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <Link
                href="/chapters"
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition text-center"
              >
                Começar a ler
              </Link>
              <Link
                href="/about/entre-a-luz-e-a-escuridao"
                className="px-6 py-3 bg-white/10 text-primary dark:text-white font-medium rounded-md hover:bg-primary/10 transition text-center border border-primary dark:border-white"
              >
                Saiba mais
              </Link>
            </div>
          </div>
          {/* Novel 2 */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="relative w-full aspect-[2/3] max-w-[320px] mx-auto shadow-xl">
              <Image
                src="/capa2.jpeg"
                alt="Capa de Hidden Lines"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <h2 className="text-2xl font-bold mt-6 mb-2 text-center">
              <span className="font-noto-sans-jp">隠れた線</span>
              <span className="block text-gray-600 dark:text-gray-400 text-lg">Hidden Lines</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
              Uma história sobre segredos, descobertas e as linhas que conectam passado e presente.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <Link
                href="/chapters/hidden-lines"
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition text-center"
              >
                Começar a ler
              </Link>
              <Link
                href="/about/hidden-lines"
                className="px-6 py-3 bg-white/10 text-primary dark:text-white font-medium rounded-md hover:bg-primary/10 transition text-center border border-primary dark:border-white"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Chapters Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Últimos Capítulos</h2>

          <div className="grid gap-6">
            {/* Capítulos da primeira novel */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">光と闇の間</h3>
              <div className="grid gap-4">
                {[1, 2, 3].map((chapter) => (
                  <Link
                    key={chapter}
                    href={`/chapters/${chapter}`}
                    className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
                  >
                    <div className="p-6">
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                        Capítulo {chapter}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Breve descrição do capítulo...
                      </p>
                    </div>
                    <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>10 de Abril, 2025</span>
                      </div>
                      <div className="bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <BiChevronRight size={20} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Capítulos da Hidden Lines */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Hidden Lines</h3>
              <div className="grid gap-4">
                {[1, 2, 3].map((chapter) => (
                  <Link
                    key={chapter}
                    href={`/chapters/hidden-lines/${chapter}`}
                    className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
                  >
                    <div className="p-6">
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                        Capítulo {chapter}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Breve descrição do capítulo...
                      </p>
                    </div>
                    <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>10 de Abril, 2025</span>
                      </div>
                      <div className="bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <BiChevronRight size={20} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
