/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lande-orang": "#e3a56b",
        "lande-amber": "#451A03",
        "lande-willow": "#96875a",
        "lande-peach": "#e36b6b",
        "lande-peach-2": "#e68c8c",
        "lande-peach-ligth": "#edc5c5",
        "lande-peach-ligth-2": "#f5e1e1",
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'jura': ['"Jura"', 'sans-serif'],
        'lato': ['"Lato"', 'sans-serif'],
        'quicksand': ['"Quicksand"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
