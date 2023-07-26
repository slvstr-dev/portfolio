/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    colors: {},
    extend: {
      fontFamily: {
        body: ['var(--font-didact-gothic)'],
        handwriting: ['var(--font-eb-garamond)'],
        display: ['var(--font-arvo)'],
      },
      colors: {
        black: '#030303',
        white: '#FFFDFE',
        gray: {
          100: '#7B949B',
          200: '#51747C',
          300: '#114759',
        },
        yellow: {
          100: '#F4CD5C',
        },
        orange: {
          100: '#E7B071',
        },
        brown: {
          100: '#EBBAAC',
          200: '#EAB498',
          300: '#D28578',
          400: '#5B3500',
        },
        red: {
          100: '#FE6D7F',
          200: '#B71A22',
          300: '#7a0513',
        },
        pink: {
          100: '#FCE6F5',
          200: '#FFC9E8',
          300: '#FFBECF',
          400: '#E9A6BD',
          500: '#D3849C',
        },
        blue: {
          100: '#CAFAF6',
          200: '#314854',
        },
      },
    },
  },
  plugins: [],
};
