import { storyblokEditable } from '@storyblok/react/rsc';

import type { FeatureStoryblok } from '@/src/storyblok/components.253354';

export interface FeatureProps {
  blok: FeatureStoryblok;
}

export const Feature = ({ blok }: FeatureProps) => {
  return <div {...storyblokEditable(blok)}>{blok.name}</div>;
};
