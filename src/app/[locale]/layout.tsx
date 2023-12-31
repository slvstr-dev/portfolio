import { type PropsWithChildren } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { getTranslations } from '@/utils/translationUtils';

import '@/styles/global.css';

import { fonts } from '@/constants/fonts';

export interface ParamsProps {
  params: { locale: string };
}

export interface RootLayoutProps extends PropsWithChildren<ParamsProps> {}

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'common.meta');

  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
  };
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const translations = await getTranslations(locale);

  return (
    <html lang={locale} className={fonts}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider locale={locale} messages={translations}>
          {children}

          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
