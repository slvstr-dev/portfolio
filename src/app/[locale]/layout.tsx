import { PropsWithChildren } from 'react';

import { Inconsolata, Playfair } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { getMessages } from '@/src/utils/translationUtils';

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
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${playfair.variable} ${inconsolata.variable} flex min-h-screen flex-col`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />

          <main className="bg-theme-light flex grow flex-col">{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
