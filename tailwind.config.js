/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { fontFamily: {
    creamcheese: ["creamcheese", "sans-serif"],
    Cheesebase: ["Cheesebase", "sans-serif"],
    mozereella: ["mozereella", "sans-serif"],

  },
    extend: {
      colors: {
        'nutral': '#FFFBF2', 
        'primary': '#FFCF0C',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/cheebg.jpg')",
      }
    },
  },
  plugins: [],
}