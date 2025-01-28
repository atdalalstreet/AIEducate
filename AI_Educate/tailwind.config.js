/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#145DA0',
        'primary-hover': '#1E81B0',
        secondary: '#5EA3CC',
      }
    },
  },
  plugins: [],
}
