/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'squada-one': ['Squada One', 'sans-serif'],
        'archivo-black': ['Archivo Black', 'sans-serif'],
        'lilita-one': ['Lilita One', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      screens: {
        'custom-3xl': '1750px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
