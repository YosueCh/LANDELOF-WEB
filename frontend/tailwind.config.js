/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lande-orang" : "#e3a56b",
        "lande-amber" : "#451A03"

      }
    },
  },
  plugins: [],
}
