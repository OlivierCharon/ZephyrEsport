/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'zpr_purple': {
          500: '#F6C1FF',
          600: '#A979E7',
          700: '#A979E7',
          800: '#8457C1',
          900: '#5f369c',
          'second': '#BAA1D5',
          'ter': '#5f4782'
        },
        'zpr_pink': {
          500: '#67001E',
          600: '#850033',
          700: '#A4004A',
          800: '#C30062',
          900: '#E2267B',
          'second': '#DF97AC'
        },
      },
      dropShadow: {
        top: ['0 -4px -3px rgb(0 0 0 / 0.07)',
        '0 -2px -2px rgb(0 0 0 / 0.06)']
      }
    },
  },
  plugins: [],
}

