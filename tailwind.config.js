/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ["'Montserrat', sans-serif"],
      lexend: ["'Lexend', sans-serif'"],
    },
    extend: {
      colors: {
        dark: '#191919',
        jet: '#333',
        light: '#EEE',
        timberwolf: '#E2DBDB',
      },
    },
  },
  plugins: [],
};
