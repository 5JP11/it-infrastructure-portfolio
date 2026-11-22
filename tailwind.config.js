/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: '#09090B', // Pure matte obsidian (zinc-950)
        charcoal: '#121214', // Subtle elevated surface
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Geist Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
      }
    },
  },
  plugins: [],
}
