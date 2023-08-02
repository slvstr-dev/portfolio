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
        black: '#010101',
        gray: '#ADADAD',
        white: '#FFFFFF',
        pink: {
          100: '#FDEBEB',
          200: '#F0B5C1',
          300: '#D3607F',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
