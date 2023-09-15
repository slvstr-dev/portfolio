import { useLocale, useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { Container } from '@/components/layout/Container/Container';
import { Page } from '@/components/layout/Page/Page';
import { UserPinnedItems } from '@/components/network/UserPinnedItems/UserPinnedItems';
import { Anchor } from '@/components/ui/Anchor/Anchor';
import { Title } from '@/components/ui/Title/Title';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.projects.meta');

  return {
    title: t('title'),
  };
}

export default function ProjectsPage() {
  const locale = useLocale();
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

      <Container maxWidth="lg" verticalPadding="lg" className="pt-0 md:pt-0">
        <UserPinnedItems locale={locale} />
      </Container>
    </Page>
  );
}
