/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'brillito':'0 0 0.4rem #7f1d1d'
      }
    },
  },
  plugins: [],
}

