import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import Section from '@/components/layout/Container/Container';
import Hero from '@/components/ui/Hero/Hero';

import { ParamsProps } from './layout';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.home');

  return {
    title: t('title'),
  };
}

export default function HomePage() {
  const t = useTranslations('pages.home');

  return (
    <>
      <Hero className="bg-pink-100" />

      <Section>
        <h2 className="text-2xl">{t('title')}</h2>
      </Section>
    </>
  );
}
