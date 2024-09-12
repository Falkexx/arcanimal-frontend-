/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      padding: {
        'custom-x': '6rem', // Define um padding horizontal personalizado de 6rem (96px)
      },
    },
  },
  plugins: [],
};