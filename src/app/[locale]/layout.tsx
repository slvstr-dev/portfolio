import { PropsWithChildren } from 'react';

import { Inconsolata, Playfair } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
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
  const t = await getTranslator(locale, 'meta');

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
    <html lang={locale}>
      <body className={`${playfair.variable} ${inconsolata.variable} flex min-h-screen flex-col`}>
        <NextIntlClientProvider locale={locale} messages={translations}>
          <Header />

          <main className="flex grow flex-col bg-theme-inverted">{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
