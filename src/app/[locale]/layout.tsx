import { PropsWithChildren } from 'react';

import { Inter } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { getMessages } from '@/src/utils/translationUtils';

const inter = Inter({ subsets: ['latin'] });

export interface ParamsProps {
  params: { locale: string };
}

export interface LocaleLayoutProps extends PropsWithChildren<ParamsProps> {}

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

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />

          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
