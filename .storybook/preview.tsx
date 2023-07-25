import type { Preview } from '@storybook/react';

import '@/styles/global.css';

import { Arvo, Didact_Gothic, EB_Garamond } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';

import messages from '@/messages/en.json';

const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-arvo',
});

const didactGothic = Didact_Gothic({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-didact-gothic',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
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
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <div className={`${arvo.variable} ${didactGothic.variable} ${ebGaramond.variable}`}>
          <Story />
        </div>
      </NextIntlClientProvider>
    ),
  ],
};

export default preview;
