import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { Container } from '@/components/layout/Container/Container';
import { Hero } from '@/components/ui/Hero/Hero';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.skills.meta');

  return {
    title: t('title'),
  };
}

export default function SkillsPage() {
  const t = useTranslations('pages.skills');

  return (
    <>
      <Hero className="bg-theme-brand-100" />

      <Container>
        <h2 className="text-2xl">{t('title')}</h2>
      </Container>
    </>
  );
}
