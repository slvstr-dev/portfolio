import { StoryblokStory } from '@storyblok/react/rsc';
import { getTranslator } from 'next-intl/server';

import type { ParamsProps } from '@/app/[locale]/layout';
import { getStorybookPreviewData } from '@/utils/storyblokUtils';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.home.meta');

  return {
    title: t('title'),
  };
}

export default async function HomePage() {
  const data = await getStorybookPreviewData('home');

  console.log(data);
  return <StoryblokStory story={data.data.story} />;
}
