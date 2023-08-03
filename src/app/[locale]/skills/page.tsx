import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import Section from '@/components/layout/Container/Container';
import Hero from '@/components/ui/Hero/Hero';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.skills');

  return {
    title: t('title'),
  };
}

export default function SkillsPage() {
  const t = useTranslations('pages.skills');

  return (
    <>
      <Hero className="bg-pink-100" />

      <Section>
        <h2 className="text-2xl">{t('title')}</h2>
      </Section>
    </>
  );
}
