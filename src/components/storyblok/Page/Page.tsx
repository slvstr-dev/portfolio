import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

import type { PageStoryblok } from '@/src/storyblok/components.253354';

export interface PageProps {
  blok: PageStoryblok;
}

export const Page = ({ blok }: PageProps) => {
  return (
    <main className="mt-4 text-center" {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
