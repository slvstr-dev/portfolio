import { storyblokEditable } from '@storyblok/react/rsc';

import type { FeatureStoryblok } from '@/root/component-types-sb';

export interface FeatureProps {
  blok: FeatureStoryblok;
}

export const Feature = ({ blok }: FeatureProps) => {
  return <div {...storyblokEditable(blok)}>{blok.name}</div>;
};
