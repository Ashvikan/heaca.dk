/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'class' if you prefer
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
};
