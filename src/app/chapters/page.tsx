import Link from 'next/link'
import { FiClock, FiArrowLeft } from 'react-icons/fi'

// Dados estáticos dos capítulos (em produção, isso viria de uma API ou banco de dados)
const chapters = [
    {
        id: 1,
        title: "Começos",
        description: "Nicole se sente perdida no primeiro dia de aula até conhecer Nick, um veterano que a ajuda a encontrar sua sala.",
        date: "10 de Abril, 2025"
    },
    {
        id: 2,
        title: "Caminhos que se Cruzam",
        description: "Nicole está confusa com a navegação do campus quando Nick a encontra novamente e a guia até sua classe.",
        date: "10 de Abril, 2025"
    },
    {
        id: 3,
        title: "Uma pausa entre aulas",
        description: "Nicole e Nick compartilham um momento tranquilo durante um intervalo, começando a conhecer mais um do outro.",
        date: "10 de Abril, 2025"
    },
    {
        id: 4,
        title: "Chuva inesperada",
        description: "Uma tempestade repentina força Nicole a procurar abrigo, onde encontra Nick novamente.",
        date: "10 de Abril, 2025"
    },
    {
        id: 5,
        title: "Entre conversas e silêncios",
        description: "Nicole e Nick compartilham momentos significativos enquanto conversam sobre seus interesses e desafios.",
        date: "10 de Abril, 2025"
    },
    {
        id: 6,
        title: "As Pequenas Coisas",
        description: "Os pequenos gestos do dia a dia começam a criar uma conexão especial entre Nicole e Nick.",
        date: "10 de Abril, 2025"
    },
    {
        id: 7,
        title: "Ecos na Silhueta da Tarde",
        description: "Um encontro casual no fim da tarde revela mais sobre os sentimentos crescentes entre os dois.",
        date: "10 de Abril, 2025"
    },
    {
        id: 8,
        title: "Entre Corações Atrapalhados",
        description: "Nicole e Nick enfrentam confusões em seus sentimentos enquanto tentam entender o que estão vivendo.",
        date: "10 de Abril, 2025"
    },
    {
        id: 9,
        title: "Calda de maçã e silêncios",
        description: "Um encontro na cafeteria do campus traz à tona emoções inexploradas entre Nicole e Nick.",
        date: "10 de Abril, 2025"
    },
    {
        id: 10,
        title: "Entre Palavras Não Ditas",
        description: "Há muito a ser dito entre eles, mas as palavras nem sempre encontram seu caminho.",
        date: "10 de Abril, 2025"
    },
    {
        id: 11,
        title: "Notificação às 22:47",
        description: "Uma mensagem tardia muda o rumo da noite e dos pensamentos de Nicole.",
        date: "10 de Abril, 2025"
    },
    {
        id: 12,
        title: "Silêncios e Sinais",
        description: "Os silêncios entre Nicole e Nick começam a falar mais alto que as palavras.",
        date: "10 de Abril, 2025"
    },
    {
        id: 13,
        title: "Entre Palavras Não Ditas",
        description: "Sentimentos que crescem nos espaços entre as conversas e nos olhares trocados.",
        date: "10 de Abril, 2025"
    },
    {
        id: 14,
        title: "Vozes do Passado",
        description: "Memórias antigas começam a ecoar no presente, trazendo novos desafios.",
        date: "10 de Abril, 2025"
    },
    {
        id: 15,
        title: "Entre o Hoje e o Ontem",
        description: "O passado e o presente se entrelaçam, criando novas perspectivas para Nicole e Nick.",
        date: "10 de Abril, 2025"
    },
    {
        id: 16,
        title: "Bem-vinda ao Inferno, Yuna",
        description: "A chegada de uma pessoa do passado de Nick traz complicações inesperadas.",
        date: "10 de Abril, 2025"
    },
    {
        id: 17,
        title: "Torta de climão com cobertura de sarcasmo",
        description: "Um encontro desconfortável traz à tona tensões não resolvidas e humor ácido.",
        date: "10 de Abril, 2025"
    },
    {
        id: 18,
        title: "Coisas que o tempo não leva",
        description: "Algumas memórias persistem, mesmo quando tentamos deixá-las para trás.",
        date: "10 de Abril, 2025"
    },
    {
        id: 19,
        title: "Entre Linhas e Silêncios",
        description: "O que não é dito se torna tão importante quanto o que é falado.",
        date: "10 de Abril, 2025"
    },
    {
        id: 20,
        title: "Entre Memórias e Espelhos",
        description: "Reflexões sobre o passado mostram novos caminhos para o futuro.",
        date: "10 de Abril, 2025"
    },
    {
        id: 21,
        title: "Quando a Distância Dói",
        description: "A separação física traz à tona a intensidade dos sentimentos entre Nicole e Nick.",
        date: "10 de Abril, 2025"
    },
    {
        id: 22,
        title: "O Fim Que É Um Começo",
        description: "O que parece ser um final revela-se como o início de algo novo.",
        date: "10 de Abril, 2025"
    },
    {
        id: 23,
        title: "Entre risos, um passo além",
        description: "Momentos leves trazem profundidade à relação entre Nicole e Nick.",
        date: "10 de Abril, 2025"
    },
    {
        id: 24,
        title: "Quase",
        description: "Algumas vezes, estar quase lá é tão significativo quanto chegar.",
        date: "10 de Abril, 2025"
    },
    {
        id: 25,
        title: "O Fim Que É Um Começo",
        description: "A jornada de Nicole e Nick chega a um ponto de transformação.",
        date: "10 de Abril, 2025"
    }
]

export default function ChaptersPage() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
                <Link href="/" className="flex items-center text-gray-500 hover:text-primary transition mr-4">
                    <FiArrowLeft className="mr-2" />
                    Voltar
                </Link>
                <h1 className="text-3xl font-bold">Capítulos</h1>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {chapters.map((chapter) => (
                    <div key={chapter.id} className="mb-6">
                        <Link href={`/chapters/${chapter.id}`}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                                <div className="p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-xl font-semibold">
                                                Capítulo {chapter.id} — &ldquo;{chapter.title}&rdquo;
                                            </h2>
                                            <div className="flex items-center text-gray-500 dark:text-gray-400">
                                                <FiClock className="mr-1" />
                                                <span className="text-sm">{chapter.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                                        {chapter.description}
                                    </p>
                                    <div className="flex justify-end">
                                        <Link href={`/chapters/${chapter.id}`} className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
                                            Ler capítulo
                                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
} 