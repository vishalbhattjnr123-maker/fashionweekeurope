/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',
          offwhite: '#F8F8F7',
          ivory: '#FDFCF8',
          charcoal: '#1A1A1A',
          beige: '#E6E4DD',
          gold: '#C8A97E',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        editorial: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
