import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { Container } from '@/components/layout/Container/Container';
import { Page } from '@/components/layout/Page/Page';
import { Repositories } from '@/components/network/Repositories/Repositories';
import { Anchor } from '@/components/ui/Anchor/Anchor';
import { Seperator } from '@/components/ui/Seperator/Seperator';
import { Title } from '@/components/ui/Title/Title';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.projects.meta');

  return {
    title: t('title'),
  };
}

export default function ProjectsPage() {
  const t = useTranslations('pages.projects');

  return (
    <Page title={t('title')}>
      <Container maxWidth="lg" gap="xs" verticalPadding="lg">
        <Title>
          {t.rich('intro.title', {
            tag: (chunks) => <span className="italic">{chunks}</span>,
          })}
        </Title>

        <p className="text-center">
          {t.rich('intro.description', {
            tag: (chunks) => (
              <Anchor href={process.env.NEXT_PUBLIC_GITHUB_PROFILE}>{chunks}</Anchor>
            ),
          })}
        </p>
      </Container>

      <Container verticalPadding="none" as="div">
        <Seperator />
      </Container>

      <Container maxWidth="lg" gap="xs" verticalPadding="lg">
        <Repositories />
      </Container>
    </Page>
  );
}
