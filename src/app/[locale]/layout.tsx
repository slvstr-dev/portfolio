import { PropsWithChildren } from 'react';

import { Arvo, Didact_Gothic, EB_Garamond } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { getMessages } from '@/src/utils/translationUtils';

import '@/styles/global.css';

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
      <body
        className={`${arvo.variable} ${didactGothic.variable} ${ebGaramond.variable} flex min-h-screen flex-col`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />

          <main className="flex grow flex-col bg-white">{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
