import { storyblokEditable } from '@storyblok/react/rsc';

import type { TeaserStoryblok } from '@/src/storyblok/components.253354';

export interface TeaserProps {
  blok: TeaserStoryblok;
}

export const Teaser = ({ blok }: TeaserProps) => {
  return (
    <h2 className="mb-10 text-2xl" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};
