import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // Configura o webpack para usar os arquivos .cjs
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'postcss.config': './postcss.config.cjs',
      'tailwind.config': './tailwind.config.cjs',
    };
    
    return config;
  },
};

export default nextConfig;
