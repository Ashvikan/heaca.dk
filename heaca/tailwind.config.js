/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: '#2B2D42',
        grayBlue: '#8D99AE',
        lightGray: '#EDF2F4',
        red: '#EF233C',
        darkRed: '#D80032',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
