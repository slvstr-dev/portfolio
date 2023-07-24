/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    colors: {},
    extend: {
      colors: {
        black: '#271D1F',
        white: '#FFF',
        yellow: {
          100: '#FBEBD4',
          200: '#F8E0BE',
          300: '#F7D6A7',
          400: '#F4CC91',
        },
        brown: {
          100: '#E7C7BF',
          200: '#D9A99D',
          300: '#CC8D7E',
          400: '#C1715D',
        },
        red: {
          100: '#EFB2B7',
          200: '#E68D93',
          300: '#DE6470',
          400: '#D8404C',
        },
        pink: {
          100: '#EFC8D3',
          200: '#E6B0BE',
          300: '#DD95A7',
          400: '#D57992',
        },
        purple: {
          100: '#BEA9B9',
          200: '#9D8092',
          300: '#7C546E',
          400: '#5B2A4A',
        },
        blue: {
          100: '#C6D4EB',
          200: '#ACBFE8',
          300: '#90A8D6',
          400: '#7493CC',
        },
        green: {
          100: '#D0E0B3',
          200: '#B8D18C',
          300: '#A0C267',
          400: '#88B241',
        },
      },
    },
  },
  plugins: [],
};
