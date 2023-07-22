import type { Preview } from '@storybook/react';

import '@/styles/global.css';

import { NextIntlClientProvider } from 'next-intl';

import messages from '@/messages/en-GB.json';

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
      <NextIntlClientProvider locale="nl-NL" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
};

export default preview;
