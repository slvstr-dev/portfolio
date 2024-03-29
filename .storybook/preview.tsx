import type { Preview } from '@storybook/react';

import '@/styles/global.css';

import { NextIntlClientProvider } from 'next-intl';

import { fonts } from '@/constants/fonts';
import translations from '@/translations/en';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    appDirectory: true,
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={translations}>
        <div className={fonts}>
          <Story />
        </div>
      </NextIntlClientProvider>
    ),
  ],
};

export default preview;
