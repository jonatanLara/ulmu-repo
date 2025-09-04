// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    publicDir: 'assets',
  },
   markdown: {
    shikiConfig: { theme: "poimandres", wrap: true } // bonito para el tema oscuro
  },
  output: 'static', // o 'server' si necesitas SSR
  site: 'https://app.repo.ulmu-tm.com', // tu dominio en NueBox
  base: '/', // o la ruta base si está en subdirectorio,
  // build: {
  //   assets: 'assets' // Esto hará que Astro procese los assets
  // }
});