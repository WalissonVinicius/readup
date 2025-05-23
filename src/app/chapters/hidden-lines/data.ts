import fs from 'fs'
import path from 'path'

interface Chapter {
    id: number
    title: string
    description: string
    date: string
    content: string
}

const extractChapterTitles = (content: string): Chapter[] => {
    const chapters: Chapter[] = []
    let currentChapter = 0
    let currentTitle = ''
    let currentDescription = ''
    let foundChapter = false
    let chapterContent = ''

    const lines = content.split('\n')
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()
        
        if (line.startsWith('『Hidden Lines – Capítulo')) {
            // Se já temos um capítulo em andamento, salvamos ele
            if (foundChapter) {
                chapters.push({
                    id: currentChapter,
                    title: currentTitle,
                    description: currentDescription,
                    date: "10 de Abril, 2025",
                    content: chapterContent.trim()
                })
            }
            // Começamos um novo capítulo
            currentChapter = parseInt(line.match(/Capítulo (\d+)/)?.[1] || '0')
            currentTitle = ''
            currentDescription = ''
            chapterContent = ''
            foundChapter = true
        } else if (foundChapter) {
            // Adiciona a linha ao conteúdo do capítulo
            chapterContent += line + '\n'
            
            // Se ainda não temos título e encontramos uma linha não vazia, é o título
            if (!currentTitle && line) {
                currentTitle = line
            }
            // Se temos título mas não temos descrição e encontramos uma linha não vazia, é a descrição
            else if (currentTitle && !currentDescription && line) {
                currentDescription = line
            }
        }
    }

    // Adiciona o último capítulo, se houver
    if (foundChapter && currentTitle) {
        chapters.push({
            id: currentChapter,
            title: currentTitle,
            description: currentDescription,
            date: "10 de Abril, 2025",
            content: chapterContent.trim()
        })
    }

    return chapters
}

// Lê o arquivo HL_certo.txt e extrai os títulos dos capítulos
const filePath = path.join(process.cwd(), 'HL_certo.txt')
const fileContent = fs.readFileSync(filePath, 'utf-8')
export const hiddenLinesChapters = extractChapterTitles(fileContent) 