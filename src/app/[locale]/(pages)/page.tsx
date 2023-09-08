import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { Container } from '@/components/layout/Container/Container';
import { Page } from '@/components/layout/Page/Page';
import { Bio } from '@/components/network/Bio/Bio';
import { Seperator } from '@/components/ui/Seperator/Seperator';
import { Title } from '@/components/ui/Title/Title';

// const placeholderImages: [ImageProps, ImageProps, ImageProps, ImageProps] = [
//   {
//     src: 'https://placehold.co/600x400/png',
//     caption: 'This is a caption',
//   },
//   {
//     src: 'https://placehold.co/600x400/png',
//   },
//   {
//     src: 'https://placehold.co/600x400/png',
//   },
//   {
//     src: 'https://placehold.co/600x400/png',
//   },
// ];

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.home.meta');

  return {
    title: t('title'),
  };
}

export default function HomePage() {
  const t = useTranslations('pages.home');

  return (
    <Page title={t('title')}>
      <Container maxWidth="lg" gap="xs" verticalPadding="lg">
        <Title>
          {t.rich('intro.title', {
            tag: (chunks) => <span className="italic">{chunks}</span>,
          })}
        </Title>

        <p className="text-center">{t('intro.description')}</p>
      </Container>

      <Container verticalPadding="none" as="div">
        <Seperator />
      </Container>

      <Container maxWidth="lg" verticalPadding="lg">
        <Bio />
      </Container>

      {/* <Container verticalPadding="none"  as="div">
        <Seperator />
      </Container>

      <Container maxWidth="lg" verticalPadding="lg">
        <MasonryBlock images={placeholderImages} />
      </Container> */}
    </Page>
  );
}
