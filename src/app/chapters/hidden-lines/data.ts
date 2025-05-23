<<<<<<< HEAD
interface Chapter {
    id: number
    title: string
    description: string
    date: string
    content: string
}

export const hiddenLinesChapters: Chapter[] = [
    { 
        id: 1, 
        title: "Linhas Invisíveis", 
        date: "15 de Abril, 2025", 
        description: "O início de uma jornada através de segredos e descobertas.",
        content: "Conteúdo do capítulo em desenvolvimento..."
    },
    { 
        id: 2, 
        title: "Ecos do Passado", 
        date: "15 de Abril, 2025", 
        description: "Memórias antigas começam a emergir.",
        content: "Conteúdo do capítulo em desenvolvimento..."
    },
    { 
        id: 3, 
        title: "Entre as Sombras", 
        date: "15 de Abril, 2025", 
        description: "A verdade começa a se revelar.",
        content: "Conteúdo do capítulo em desenvolvimento..."
    },
    { 
        id: 4, 
        title: "Conexões Perdidas", 
        date: "15 de Abril, 2025", 
        description: "Vínculos do passado reaparecem.",
        content: "Conteúdo do capítulo em desenvolvimento..."
    },
    { 
        id: 5, 
        title: "Desvendando Mistérios", 
        date: "15 de Abril, 2025", 
        description: "Cada descoberta leva a mais perguntas.",
        content: "Conteúdo do capítulo em desenvolvimento..."
    }
]; 
=======
import fs from 'fs'
import path from 'path'

const extractChapterTitles = (content: string) => {
    const chapters = []
    let currentChapter = 0
    let currentTitle = ''
    let currentDescription = ''
    let foundChapter = false

    const lines = content.split('\n')
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()
        
        if (line.startsWith('『Hidden Lines – Capítulo')) {
            // Se já temos um capítulo em andamento (com título), salvamos ele
            if (foundChapter) {
                chapters.push({
                    id: currentChapter,
                    title: currentTitle,
                    description: currentDescription,
                    date: "10 de Abril, 2025"
                })
            }
            // Começamos um novo capítulo
            currentChapter = parseInt(line.match(/Capítulo (\d+)/)?.[1] || '0')
            currentTitle = ''
            currentDescription = ''
            foundChapter = true
        } else if (line && !currentTitle && foundChapter) {
            // A primeira linha não vazia após o marcador é o título
            currentTitle = line
            // A descrição será a primeira linha do conteúdo do capítulo
            for (let j = i + 1; j < lines.length; j++) {
                const nextLine = lines[j].trim()
                if (nextLine && !nextLine.startsWith('『Hidden Lines – Capítulo')) {
                    currentDescription = nextLine
                    break
                }
            }
        }
    }

    // Adiciona o último capítulo, se houver
    if (foundChapter && currentTitle) {
        chapters.push({
            id: currentChapter,
            title: currentTitle,
            description: currentDescription,
            date: "10 de Abril, 2025"
        })
    }

    return chapters
}

// Lê o arquivo HL.txt e extrai os títulos dos capítulos
const filePath = path.join(process.cwd(), 'HL.txt')
const fileContent = fs.readFileSync(filePath, 'utf-8')
export const hiddenLinesChapters = extractChapterTitles(fileContent) 
>>>>>>> parent of b574f99 (att)
