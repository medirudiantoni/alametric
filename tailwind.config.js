/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6738BA",
        secondary: "#754DC0",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      }
    },
  },
  plugins: [],
}