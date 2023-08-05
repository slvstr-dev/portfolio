import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { Container } from '@/components/layout/Container/Container';
import { Page } from '@/components/layout/Page/Page';
import { Bio } from '@/components/network/Bio/Bio';
import { Seperator } from '@/components/ui/Seperator/Seperator';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.home.meta');

  return {
    title: t('title'),
  };
}

export default function HomePage() {
  const t = useTranslations('pages.home');

  return (
    <Page title={t('title')} backgroundImage="https://placehold.co/600x400/png">
      <Container>
        <h2 className="text-center text-5xl leading-relaxed tracking-widest">
          {t.rich('about_me.title', {
            tag: (chunks) => <span className="italic">{chunks}</span>,
          })}
        </h2>
      </Container>

      <Container verticalPadding="none">
        <Seperator />
      </Container>

      <Container maxWidth="lg" verticalPadding="lg">
        <Bio />
      </Container>
    </Page>
  );
}
