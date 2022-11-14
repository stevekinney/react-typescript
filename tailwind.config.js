/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { ...colors, primary: colors.cyan },
      maxWidth: {
        prose: '85ch',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
