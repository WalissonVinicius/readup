const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Caminhos para os arquivos
const inputFile = path.join(__dirname, '../public/capa1.jpeg');
const outputDir = path.join(__dirname, '../public');
const favicon16 = path.join(outputDir, 'favicon-16x16.png');
const favicon32 = path.join(outputDir, 'favicon-32x32.png');
const favicon96 = path.join(outputDir, 'favicon-96x96.png');

// Verifica se o diretório existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Função para criar o favicon
async function generateFavicons() {
    try {
        console.log('Gerando favicon a partir de:', inputFile);
        
        // Redimensiona para 16x16
        await sharp(inputFile)
            .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .png()
            .toFile(favicon16);
        console.log('Favicon 16x16 gerado com sucesso');
        
        // Redimensiona para 32x32
        await sharp(inputFile)
            .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .png()
            .toFile(favicon32);
        console.log('Favicon 32x32 gerado com sucesso');
        
        // Redimensiona para 96x96
        await sharp(inputFile)
            .resize(96, 96, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .png()
            .toFile(favicon96);
        console.log('Favicon 96x96 gerado com sucesso');
        
        console.log('Todos os favicons foram gerados com sucesso!');
        console.log('Agora adicione os seguintes links ao <head> do seu layout:');
        console.log('<link rel="icon" href="/favicon.ico" />');
        console.log('<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />');
        console.log('<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />');
        console.log('<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />');
    } catch (error) {
        console.error('Erro ao gerar os favicons:', error);
    }
}

// Executa a função principal
generateFavicons(); 