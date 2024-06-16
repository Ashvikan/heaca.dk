/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'custom-white': '#ffffff',
        'custom-red': '#981818',
        'custom-footer': '#002626',
        'custom-metal': '#292F36',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
