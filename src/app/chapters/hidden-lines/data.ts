<<<<<<< HEAD
<<<<<<< HEAD
=======
import fs from 'fs'
import path from 'path'

<<<<<<< HEAD
>>>>>>> parent of 5a3d9c6 (att)
interface Chapter {
    id: number
    title: string
    description: string
    date: string
    content: string
}

const extractChapterTitles = (content: string): Chapter[] => {
    const chapters: Chapter[] = []
=======
const extractChapterTitles = (content: string) => {
    const chapters = []
>>>>>>> parent of b574f99 (att)
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
<<<<<<< HEAD
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
=======
>>>>>>> parent of 5a3d9c6 (att)

    // Adiciona o último capítulo, se houver
    if (foundChapter && currentTitle) {
        chapters.push({
            id: currentChapter,
            title: currentTitle,
            description: currentDescription,
<<<<<<< HEAD
<<<<<<< HEAD
            date: "10 de Abril, 2025"
=======
            date: "10 de Abril, 2025",
            content: chapterContent.trim()
>>>>>>> parent of 5a3d9c6 (att)
=======
            date: "10 de Abril, 2025"
>>>>>>> parent of b574f99 (att)
        })
    }

    return chapters
}

<<<<<<< HEAD
<<<<<<< HEAD
// Lê o arquivo HL.txt e extrai os títulos dos capítulos
const filePath = path.join(process.cwd(), 'HL.txt')
const fileContent = fs.readFileSync(filePath, 'utf-8')
export const hiddenLinesChapters = extractChapterTitles(fileContent) 
>>>>>>> parent of b574f99 (att)
=======
// Lê o arquivo HL_certo.txt e extrai os títulos dos capítulos
const filePath = path.join(process.cwd(), 'HL_certo.txt')
=======
// Lê o arquivo HL.txt e extrai os títulos dos capítulos
const filePath = path.join(process.cwd(), 'HL.txt')
>>>>>>> parent of b574f99 (att)
const fileContent = fs.readFileSync(filePath, 'utf-8')
export const hiddenLinesChapters = extractChapterTitles(fileContent) 
>>>>>>> parent of 5a3d9c6 (att)
