# 光と闇の間 - Site da Light Novel

Este é um site para a light novel "光と闇の間" (Entre a Luz e a Escuridão) escrita por Nicolas. O site permite que os leitores acessem todos os capítulos da light novel em um ambiente agradável e responsivo.

## Tecnologias utilizadas

- [Next.js 14](https://nextjs.org/) - Framework React com renderização do lado do servidor
- [TypeScript](https://www.typescriptlang.org/) - JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca para animações
- [Next Themes](https://github.com/pacocoursey/next-themes) - Suporte a temas claro/escuro
- [React Icons](https://react-icons.github.io/react-icons/) - Ícones para React

## Recursos

- Design responsivo para todos os dispositivos (desktop, tablet, mobile)
- Modo claro e escuro
- Navegação intuitiva entre capítulos
- Ajuste de tamanho da fonte para leitura personalizada
- Layout otimizado para leitura de light novels
- Suporte a fontes japonesas

## Começando

### Pré-requisitos

- Node.js 18.17 ou superior
- npm (ou yarn, pnpm)

### Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/kage-to-hikari.git
cd kage-to-hikari
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do projeto

```
kage-to-hikari/
├── public/              # Arquivos estáticos (imagens, etc.)
├── src/                 # Código-fonte
│   ├── app/             # Páginas da aplicação (usando App Router)
│   │   ├── about/       # Página "Sobre"
│   │   ├── chapters/    # Páginas de capítulos
│   │   └── page.tsx     # Página inicial
│   ├── components/      # Componentes reutilizáveis
│   └── lib/             # Funções utilitárias e hooks
├── package.json         # Dependências e scripts
└── README.md            # Este arquivo
```

## Personalização

### Adicionando novos capítulos

Para adicionar novos capítulos à light novel, edite os arquivos em `src/app/chapters/[id]/page.tsx` e adicione novos capítulos à lista `chapters` e à função `extractChapterContent`.

### Alterando a imagem de capa

Substitua o arquivo em `public/cover.jpg` pela imagem de capa desejada.

## Produção

Para criar uma build de produção:

```bash
npm run build
```

Para executar a build de produção:

```bash
npm start
```

## Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

---

Criado com ❤️ para a light novel "光と闇の間" de Nicolas.
