import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import type { ParamsProps } from '@/app/[locale]/layout';
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
    <Page title={t('title')}>
      <Container id="about" maxWidth="lg" gap="xs" verticalPadding="xl">
        <About />
      </Container>

      <Container verticalPadding="none">
        <Seperator />
      </Container>

      <Container maxWidth="lg" verticalPadding="xl">
        <Quote />
      </Container>

      <Container verticalPadding="none">
        <Seperator />
      </Container>

      <Container id="projects" className="scroll-mt-10" maxWidth="lg" verticalPadding="xl">
        <Projects />
      </Container>

      <Container verticalPadding="none">
        <Seperator />
      </Container>

      <Container id="experience" className="scroll-mt-10" maxWidth="lg" verticalPadding="xl">
        <Experience />
      </Container>
    </Page>
  );
}
