import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { Container } from '@/components/layout/Container/Container';
import { Hero } from '@/components/ui/Hero/Hero';
import { Quote } from '@/components/ui/Quote/Quote';
import { Seperator } from '@/components/ui/Seperator/Seperator';

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
      <Hero className="bg-theme-brand-100" />

      <Container>
        <h2 className="text-center text-5xl leading-relaxed tracking-widest">
          {t.rich('title', {
            tag: (chunks) => <span className="italic">{chunks}</span>,
          })}
        </h2>
      </Container>

      <Container verticalPadding="none">
        <Seperator />
      </Container>

      <Container maxWidth="lg" verticalPadding="lg">
        <Quote icon="Commit">
          Passionate about frontend development. Eager to explore new tools and build awesome
          projects!
        </Quote>
      </Container>
    </>
  );
}
