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
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        theme: {
          base: 'rgba(var(--color-base, <alpha-value>))',
          inverted: 'rgba(var(--color-inverted, <alpha-value>))',
          muted: 'rgba(var(--color-muted, <alpha-value>))',
          highlight: 'rgba(var(--color-highlight, <alpha-value>))',
          brand: {
            100: 'rgba(var(--color-brand-100, <alpha-value>))',
            200: 'rgba(var(--color-brand-200, <alpha-value>))',
            300: 'rgba(var(--color-brand-300, <alpha-value>))',
          },
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
