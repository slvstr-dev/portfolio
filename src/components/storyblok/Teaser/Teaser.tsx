import { storyblokEditable } from '@storyblok/react/rsc';

import type { TeaserStoryblok } from '@/root/component-types-sb';

export interface TeaserProps {
  blok: TeaserStoryblok;
}

export const Teaser = ({ blok }: TeaserProps) => {
  console.log({ blok });
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};
