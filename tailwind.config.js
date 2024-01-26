/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ["'Montserrat', sans-serif"],
    },
    colors: {
      dark: '#333',
      light: '#eee',
    },
  },
  plugins: [],
};