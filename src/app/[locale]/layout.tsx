import { PropsWithChildren } from 'react';

import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

import { NextIntlClientProvider } from 'next-intl';
import { getTranslator } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export interface ParamsProps {
  params: { locale: string };
}

export interface LocaleLayoutProps extends PropsWithChildren<ParamsProps> {}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en-GB', 'nl-NL'].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'meta');

  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: 'Portfolio site created with Next.js, TypeScript & Tailwind.',
  };
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const messages = await getMessages(locale);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
