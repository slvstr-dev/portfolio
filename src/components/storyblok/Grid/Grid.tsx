import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

import type { GridStoryblok } from '@/root/component-types-sb';

export interface GridProps {
  blok: GridStoryblok;
}

export const Grid = ({ blok }: GridProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
