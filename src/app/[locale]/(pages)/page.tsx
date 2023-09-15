import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { About } from '@/components/blocks/About/About';
import { Experience } from '@/components/blocks/Experience/Experience';
import { Projects } from '@/components/blocks/Projects/Projects';
import { Quote } from '@/components/blocks/Quote/Quote';
import { Container } from '@/components/layout/Container/Container';
import { Page } from '@/components/layout/Page/Page';
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
    <Page title={t('title')} src="/images/hero.jpg">
      <Container id="about" maxWidth="lg" gap="xs" verticalPadding="lg">
        <About />
      </Container>

      <Container verticalPadding="none" as="div">
        <Seperator />
      </Container>

      <Container maxWidth="lg" verticalPadding="lg">
        <Quote />
      </Container>

      <Container verticalPadding="none" as="div">
        <Seperator />
      </Container>

      <Container id="projects" maxWidth="lg" verticalPadding="lg">
        <Projects />
      </Container>

      <Container verticalPadding="none" as="div">
        <Seperator />
      </Container>

      <Container id="experience" maxWidth="lg" verticalPadding="lg">
        <Experience />
      </Container>
    </Page>
  );
}
