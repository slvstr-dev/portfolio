import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { Container } from '@/components/layout/Container/Container';
import { Hero } from '@/components/layout/Hero/Hero';
import { Page } from '@/components/layout/Page/Page';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.projects.meta');

  return {
    title: t('title'),
  };
}

export default function ProjectsPage() {
  const t = useTranslations('pages.projects');

  return (
    <Page>
      <Hero className="bg-theme-brand-100">{t('title')}</Hero>

      <Container>
        <h2 className="text-2xl">{t('title')}</h2>
      </Container>
    </Page>
  );
}