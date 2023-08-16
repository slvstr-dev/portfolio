import { PropsWithChildren } from 'react';

import { Inconsolata, Playfair } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { getTranslations } from '@/src/utils/translationUtils';

import '@/styles/global.css';

const playfair = Playfair({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

export interface ParamsProps {
  params: { locale: string };
}

export interface RootLayoutProps extends PropsWithChildren<ParamsProps> {}

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'global.meta');

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
    <html lang={locale} className={`${playfair.variable} ${inconsolata.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider locale={locale} messages={translations}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
