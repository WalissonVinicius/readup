import Link from 'next/link'
import Image from 'next/image'
import { BiBookOpen, BiChevronRight } from 'react-icons/bi'
import { FiClock } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('/capa1.jpeg')] bg-cover bg-center"></div>

        <div className="container mx-auto px-4 z-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Capa à esquerda */}
            <div className="hidden md:block w-64 h-96 relative shadow-2xl">
              <Image
                src="/capa1.jpeg"
                alt="Capa de Entre a Luz e a Escuridão"
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>

            {/* Texto à direita */}
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="font-noto-sans-jp block mb-2">光と闇の間</span>
                <span className="text-3xl md:text-4xl font-light">Entre a Luz e a Escuridão</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Uma história sobre encontros inesperados, laços invisíveis e o calor que surge nos silêncios compartilhados.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/chapters"
                  className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition flex items-center justify-center"
                >
                  <BiBookOpen className="mr-2" /> Começar a Ler
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition flex items-center justify-center"
                >
                  Sobre a Obra <BiChevronRight className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capítulos Recentes Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Capítulos Recentes</h2>
            <Link href="/chapters" className="text-primary hover:underline flex items-center">
              Ver todos <BiChevronRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((chapter) => (
              <Link
                key={chapter}
                href={`/chapters/${chapter}`}
                className="group bg-gray-50 dark:bg-gray-900 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Capítulo {chapter}</span>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors mt-1">
                    {chapter === 1 && "Começos"}
                    {chapter === 2 && "Caminhos que se Cruzam"}
                    {chapter === 3 && "Uma pausa entre aulas"}
                    {chapter === 4 && "Chuva inesperada"}
                    {chapter === 5 && "Entre conversas e silêncios"}
                    {chapter === 6 && "As Pequenas Coisas"}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-3 text-sm">
                    {chapter === 1 && "O som dos passos apressados ecoava pelos corredores da universidade enquanto os alunos se movimentavam em busca das salas corretas..."}
                    {chapter === 2 && "O campus da universidade ainda carregava aquele ar de novidade, com estudantes cruzando os corredores em busca de salas..."}
                    {chapter === 3 && "Os corredores da universidade se enchiam de vozes e passos apressados. Era hora do intervalo entre os turnos..."}
                    {chapter === 4 && "O céu já estava meio fechado desde o começo da tarde, mas ninguém parecia dar bola. A maioria dos alunos ainda circulava pelo campus..."}
                    {chapter === 5 && "A semana seguinte à chuva parecia mais leve. O campus ainda estava molhado em alguns pontos, mas o clima estava mais ameno..."}
                    {chapter === 6 && "O calor do início do outono começava a dar lugar a brisas mais suaves. O campus estava mais silencioso naquele sábado de manhã..."}
                  </p>
                </div>
                <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FiClock className="mr-1" /> 10 de Abril, 2025
                  </div>
                  <div className="bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <BiChevronRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sobre a Light Novel</h2>
          <p className="text-lg mb-8">
            <span className="font-noto-sans-jp font-bold">光と闇の間</span> (Entre a Luz e a Escuridão) é uma light novel
            que acompanha a jornada de Nick e Nicole, dois estudantes universitários cujos caminhos se cruzam
            no primeiro dia de aula. Uma história sobre amizade, descobertas e os sentimentos que crescem
            silenciosamente entre duas pessoas.
          </p>
          <Link
            href="/about"
            className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition inline-flex items-center"
          >
            Saiba mais sobre a obra
            <BiChevronRight className="ml-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
