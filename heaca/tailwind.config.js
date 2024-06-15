/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'custom-white': '#ffffff',
        'custom-red': '#DF2020',
        'custom-footer': '#2C3A42',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
