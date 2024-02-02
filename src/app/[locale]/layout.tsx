import { type PropsWithChildren } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { fonts } from '@/constants/fonts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/navigation';
import { NextIntlClientProvider } from 'next-intl';
import translations from '@/translations/en';

export interface ParamsProps {
  params: { locale: string };
}

export interface RootLayoutProps extends PropsWithChildren<ParamsProps> {}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslations({ locale, namespace: 'common.meta' });

  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
  };
}

export default async function LocaleLayout({ children, params: { locale } }: RootLayoutProps) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} className={fonts}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider locale={locale} messages={translations}>
          {children}
        </NextIntlClientProvider>

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
