'use client';

import type { PropsWithChildren } from 'react';

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import { Feature } from '@/components/storyblok/Feature/Feature';
import { Grid } from '@/components/storyblok/Grid/Grid';
import { Page } from '@/components/storyblok/Page/Page';
import { Teaser } from '@/components/storyblok/Teaser/Teaser';

const components = {
  page: Page,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

export interface StoryblokProviderProps extends PropsWithChildren {}

export const StoryblokProvider = ({ children }: StoryblokProviderProps) => {
  return children;
};
