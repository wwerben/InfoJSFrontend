/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontSize: {
        '9xl': '12rem',
      },
      screens: {
        'screencard': { 'raw': '(min-aspect-ratio: 1/1)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' },
        'lg+': '1100px',
        'car2': '680px'
      },
      
      spacing: {
        '128': '1000px',
        '110': '750px',
        '111': '500px',
        '256': '64rem',
      },
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow')
  ],
}
