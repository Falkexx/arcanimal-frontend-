/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    // "./public/index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      padding: {
        'custom-x': '6rem', // Define um padding horizontal personalizado de 6rem (96px)
        'container': '7rem',  // padding horizontal de  7rem, padrao do container
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // fonte padrão Poppins
      },
      fontSize: {
        '2xl-custom': '2rem', // font size 32px
      },
      colors: {
        'default-blue': '#020080',
        'custom-blue': '#0d75fd',
        'border-color': '#E0E6ED',
        'custom-gray': '#3b3f5c',
        'custom-black': '#212529'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};


export default tailwindConfig