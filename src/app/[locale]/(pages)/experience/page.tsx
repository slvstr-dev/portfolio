import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { Container } from '@/components/layout/Container/Container';
import { Page } from '@/components/layout/Page/Page';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.experience.meta');

  return {
    title: t('title'),
  };
}

export default function ExperiencePage() {
  const t = useTranslations('pages.experience');

  return (
    <Page title={t('title')}>
      <Container>
        <h2 className="text-2xl">{t('title')}</h2>
      </Container>
    </Page>
  );
}
