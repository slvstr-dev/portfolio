/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    colors: {},
    extend: {
      fontFamily: {
        body: ['var(--font-playfair)'],
        monospace: ['var(--font-inconsolata)'],
      },
      colors: {
        black: '#010101',
        gray: '#ADADAD',
        white: '#FFFFFF',
        yellow: '#F3CC4D',
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
