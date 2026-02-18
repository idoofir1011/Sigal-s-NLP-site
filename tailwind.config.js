/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Indigo
        secondary: '#7C3AED', // Purple
        accent: '#EC4899', // Pink
      },
      fontFamily: {
        sans: ['Heebo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
