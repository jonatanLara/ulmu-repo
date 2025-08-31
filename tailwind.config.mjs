/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',],
  theme: {
    extend: {
      colors: {
        space: {
          50:"#f3f5ff",100:"#e7eaff",200:"#cfd5ff",300:"#a9b2ff",400:"#7e87ff",
          500:"#5c64f8",600:"#474fd4",700:"#383fab",800:"#2a2f7f",900:"#1d2158",950:"#151943"
        },
        nebula: {400:"#c084fc",500:"#a855f7",600:"#8b5cf6",700:"#7c3aed"},
        aurora: {400:"#67e8f9",500:"#22d3ee",600:"#06b6d4"},
        brand:"#2c3e50", brand2:"#3498db", accent:"#e74c3c",
      },
    },
  },
  plugins: [],
};