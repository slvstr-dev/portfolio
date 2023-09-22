import { StoryblokStory } from '@storyblok/react/rsc';
import { getTranslator } from 'next-intl/server';

import type { ParamsProps } from '@/app/[locale]/layout';
import { About } from '@/components/blocks/About/About';
import { Experience } from '@/components/blocks/Experience/Experience';
import { Projects } from '@/components/blocks/Projects/Projects';
import { Quote } from '@/components/blocks/Quote/Quote';
import { Container } from '@/components/layout/Container/Container';
import { Page } from '@/components/layout/Page/Page';
import { Seperator } from '@/components/ui/Seperator/Seperator';
import { client } from '@/graphql/storyblok';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.home.meta');

  return {
    title: t('title'),
  };
}

export interface HomePageProps extends ParamsProps {}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  const { PageItem } = await client.query({
    PageItem: {
      __args: {
        id: 'home',
      },
      id: true,
      slug: true,
      name: true,
      content: {
        _uid: true,
        component: true,
        body: true,
      },
    },
  });

  const t = await getTranslator(locale, 'pages.home');

  if (PageItem?.content) {
    return <StoryblokStory story={PageItem?.content} />;
  }

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

// export async function fetchData() {
//   const sbParams = { version: 'draft' } as const;

//   const storyblokApi = getStoryblokApi();

//   return storyblokApi.get(`cdn/stories/home`, sbParams);
// }
