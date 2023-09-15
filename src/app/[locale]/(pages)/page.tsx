import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { Container } from '@/components/layout/Container/Container';
import { Page } from '@/components/layout/Page/Page';
import { UserAvatar } from '@/components/network/UserAvatar/UserAvatar';
import { UserBio } from '@/components/network/UserBio/UserBio';
import { Document } from '@/components/ui/Document/Document';
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
    <Page title={t('title')} backgroundImage="/images/hero.jpg">
      <Container maxWidth="lg" gap="xs" verticalPadding="lg">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-20">
          <UserAvatar className="shrink-0" />

          <Document>
            <Title className="text-4xl uppercase">{t('about.title')}</Title>

            <h3 className="font-monospace text-lg font-normal uppercase leading-loose tracking-widest text-theme-brand-300">
              {t('about.subtitle')}
            </h3>

            <p className="font-monospace text-sm leading-loose">{t('about.description')}</p>
          </Document>
        </div>
      </Container>

      <Container verticalPadding="none" as="div">
        <Seperator />
      </Container>

      <Container maxWidth="lg" verticalPadding="lg">
        <UserBio />
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
