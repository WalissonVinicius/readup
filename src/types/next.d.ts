/* eslint-disable @typescript-eslint/no-explicit-any */
// Este arquivo extende as tipagens do Next.js para resolver problemas de compatibilidade

declare module 'next' {
  // Extendendo a interface de parâmetros para corrigir problemas de tipagem
  interface PageProps {
    params?: Record<string, string>;
  }
}

export {}; 