import type { Preview } from '@storybook/react';

import '@/styles/global.css';

import { Inconsolata, Playfair } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';

import translations from '@/translations/en.json';

const playfair = Playfair({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={translations}>
        <div
          className={`${playfair.variable} ${inconsolata.variable} flex min-h-screen flex-col font-body text-theme-base`}>
          <Story />
        </div>
      </NextIntlClientProvider>
    ),
  ],
};

export default preview;
