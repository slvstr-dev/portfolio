import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

import type { GridStoryblok } from '@/src/storyblok/components.253354';

export interface GridProps {
  blok: GridStoryblok;
}

export const Grid = ({ blok }: GridProps) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
