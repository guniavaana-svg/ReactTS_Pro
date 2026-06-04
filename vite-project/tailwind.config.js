
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bpg: ['"BPG Glaho Sylfaen"', 'serif'],
        unicode: ['"3D Unicode"', 'serif'],
        mtavruli: ['"BPG Nino Mtavruli"', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
