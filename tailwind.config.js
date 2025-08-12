/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ← C'EST ESSENTIEL !
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A7FFF',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
