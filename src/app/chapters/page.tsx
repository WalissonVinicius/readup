import Link from 'next/link'
import { FiClock, FiArrowLeft } from 'react-icons/fi'

// Dados estáticos dos capítulos (em produção, isso viria de uma API ou banco de dados)
const chapters = [
    {
        id: 1,
        title: "Começos",
        description: "O som dos passos apressados ecoava pelos corredores da universidade enquanto os alunos se movimentavam em busca das salas corretas. Era o primeiro dia de aula do semestre, e o campus ganhava vida com risos, conversas e um leve nervosismo no ar.",
        date: "10 de Abril, 2025"
    },
    {
        id: 2,
        title: "Caminhos que se Cruzam",
        description: "O campus da universidade ainda carregava aquele ar de novidade, com estudantes cruzando os corredores em busca de salas, cartazes de clubes estampados por todos os lados e uma brisa morna de início de outono balançando as folhas das árvores.",
        date: "10 de Abril, 2025"
    },
    {
        id: 3,
        title: "Uma pausa entre aulas",
        description: "Os corredores da universidade se enchiam de vozes e passos apressados. Era hora do intervalo entre os turnos, e os alunos se espalhavam pelo campus — uns correndo para os clubes, outros em busca de um lanche ou um lugar mais tranquilo para respirar.",
        date: "10 de Abril, 2025"
    },
    {
        id: 4,
        title: "Chuva inesperada",
        description: "O céu já estava meio fechado desde o começo da tarde, mas ninguém parecia dar bola. A maioria dos alunos ainda circulava pelo campus, e Nicole, como de costume, saía da aula distraída, os fones no pescoço e o olhar voltado pro celular.",
        date: "10 de Abril, 2025"
    },
    {
        id: 5,
        title: "Entre conversas e silêncios",
        description: "A semana seguinte à chuva parecia mais leve. O campus ainda estava molhado em alguns pontos, mas o clima estava mais ameno, e as árvores tinham aquele cheiro gostoso de terra molhada misturado com flores de outono.",
        date: "10 de Abril, 2025"
    },
    {
        id: 6,
        title: "Ecos na Silhueta da Tarde",
        description: "O campus parecia diferente naquela tarde. O sol, mais baixo, tingia tudo de dourado — os corredores, os degraus da entrada, até mesmo o reflexo nas janelas da biblioteca parecia brilhar com um toque mais suave.",
        date: "10 de Abril, 2025"
    },
    {
        id: 7,
        title: "Entre Corações Atrapalhados",
        description: "A cafeteria da universidade estava quase vazia. Era fim de tarde de uma sexta-feira, o sol entrava de lado pelas janelas amplas, criando linhas douradas no chão de madeira. Nick estava na fila, meio distraído, enquanto Nicole escolhia uma mesa perto da janela.",
        date: "10 de Abril, 2025"
    },
    {
        id: 8,
        title: "O Peso das Palavras",
        description: "A cafeteria da universidade estava lotada. Era fim de tarde de uma sexta-feira, e os alunos se espalhavam pelo campus, conversando, rindo e tomando café. Nicole e Nick haviam chegado cedo para garantir um lugar, mas mesmo assim tiveram que dividir uma mesa pequena perto da janela.",
        date: "10 de Abril, 2025"
    },
    {
        id: 9,
        title: "Entre Silêncios e Confissões",
        description: "A semana seguinte foi estranha. Nick parecia mais distante, mais pensativo. Nicole notava que ele passava mais tempo sozinho, às vezes sumindo por horas. Ela respeitava o espaço dele, mas não conseguia evitar a preocupação.",
        date: "10 de Abril, 2025"
    },
    {
        id: 10,
        title: "Desvio de Rota",
        description: "O dia amanheceu diferente. Nicole acordou com um sorriso no rosto, lembrando da conversa da noite anterior. Nick tinha confessado seus sentimentos, e ela também. Era um novo começo, um novo capítulo em suas vidas.",
        date: "10 de Abril, 2025"
    },
    {
        id: 11,
        title: "Notificação às 22:47",
        description: "Nicole passou os dias seguintes em um estado de negação. Ela continuou indo à universidade, esperando que Nick aparecesse a qualquer momento, com uma explicação plausível para seu desaparecimento. Mas ele não apareceu.",
        date: "10 de Abril, 2025"
    },
    {
        id: 12,
        title: "Silêncios e Sinais",
        description: "Nicole passou a noite em claro, analisando o recorte de jornal que encontrou na biblioteca. A data era de cinco anos atrás, e o acidente havia acontecido em uma estrada rural próxima à cidade. O artigo mencionava que o motorista havia perdido o controle do veículo em uma curva fechada, mas não havia detalhes sobre as vítimas.",
        date: "10 de Abril, 2025"
    },
    {
        id: 13,
        title: "A Conexão Perdida",
        description: "Sarah deixou Nicole em frente ao seu prédio, mas antes de sair, ela pegou a mão da amiga. 'Você tem certeza que quer continuar com isso?' Sarah perguntou, seus olhos cheios de preocupação. 'Parece que você está se metendo em algo muito maior do que imaginava.'",
        date: "10 de Abril, 2025"
    },
    {
        id: 14,
        title: "Vozes do Passado",
        description: "A manhã seguinte amanheceu nublada, com uma leve garoa caindo sobre a cidade. Nicole acordou cedo, ainda com a foto de Nick e seus pais na mente. Ela verificou as coordenadas no papel novamente - levavam a um local nos arredores da cidade, perto de uma estrada antiga que não era mais muito utilizada.",
        date: "10 de Abril, 2025"
    },
    {
        id: 15,
        title: "O Preço da Verdade",
        description: "De volta ao apartamento de Nicole, as duas estavam em estado de choque. Sarah trancou todas as portas e janelas enquanto Nicole examinava o dispositivo que encontraram.",
        date: "10 de Abril, 2025"
    },
    {
        id: 16,
        title: "Bem-vinda ao Inferno, Yuna",
        description: "O som de um tiro ecoou pelo apartamento, mas não foi o tiro que Nicole esperava. O homem que a ameaçava caiu no chão, e quando ela se virou, viu Nick na porta, com uma arma na mão.",
        date: "10 de Abril, 2025"
    },
    {
        id: 17,
        title: "O Refúgio",
        description: "O carro parou em frente a um prédio antigo no centro da cidade. Nick desceu primeiro, verificando os arredores antes de permitir que Nicole saísse.",
        date: "10 de Abril, 2025"
    },
    {
        id: 18,
        title: "Torta de climão com cobertura de sarcasmo",
        description: "Nicole acordou com o cheiro de café e algo doce no ar. Ela se esticou na cama improvisada que Nick havia arrumado para ela no canto do apartamento. A luz do sol entrava suavemente pelas cortinas fechadas.",
        date: "10 de Abril, 2025"
    },
    {
        id: 19,
        title: "A Caçadora de Sombras",
        description: "A chuva caía forte sobre a cidade quando Nick e Nicole chegaram ao endereço que ele havia anotado. Era um bar discreto em uma rua lateral, com uma placa desbotada que mal se podia ler.",
        date: "10 de Abril, 2025"
    },
    {
        id: 20,
        title: "Entre Linhas e Silêncios",
        description: "A chuva havia parado, mas o ar ainda estava pesado quando Nicole e Nick deixaram o bar. Yuki havia prometido entrar em contato em 24 horas com as informações que conseguisse reunir.",
        date: "10 de Abril, 2025"
    },
    {
        id: 21,
        title: "Entre Memórias e Espelhos",
        description: "O telefone de Nick tocou no meio da noite, interrompendo o silêncio do apartamento. Nicole, que havia adormecido no sofá, acordou com o som.",
        date: "10 de Abril, 2025"
    },
    {
        id: 22,
        title: "Quando a Distância Dói",
        description: "A manhã seguinte foi dedicada aos preparativos. Nick passou horas no computador, analisando mapas e planos da base do Kuroi Kage, enquanto Nicole tentava entender o que seus pais haviam descoberto.",
        date: "10 de Abril, 2025"
    },
    {
        id: 23,
        title: "A Lei do Chá Derramado",
        description: "O terceiro dia de treinamento estava chegando ao fim quando algo inesperado aconteceu. Nicole estava praticando movimentos de defesa com Aya quando notou que Nick e o Professor haviam desaparecido.",
        date: "10 de Abril, 2025"
    },
    {
        id: 24,
        title: "Quase",
        description: "O céu já estava começando a escurecer quando Nick chegou ao ponto de encontro. Ele vestia uma camisa preta simples, jeans escuro e uma jaqueta leve por cima. As mãos estavam nos bolsos, e o pé batucava no chão como se esperasse há mais de dez minutos — mesmo estando adiantado.",
        date: "10 de Abril, 2025"
    },
    {
        id: 25,
        title: "O Fim Que É Um Começo",
        description: "\"E foi assim...\" Nick terminou de falar, olhando para as duas meninas à sua frente, sentadas no tapete da sala com os olhos arregalados.",
        date: "10 de Abril, 2025"
    },
];

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