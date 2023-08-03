/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-playfair)'],
        monospace: ['var(--font-inconsolata)'],
      },
      colors: {
        theme: {
          dark: 'var(--color-dark)',
          light: 'var(--color-light)',
          muted: 'var(--color-muted)',
          highlight: 'var(--color-highlight)',
          brand: {
            100: 'var(--color-brand-100)',
            200: 'var(--color-brand-200)',
            300: 'var(--color-brand-300)',
          },
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
