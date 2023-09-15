import type { Meta, StoryObj } from '@storybook/react';

import { FeaturedText } from './FeaturedText';

export default {
  title: 'ui/FeaturedText',
  component: FeaturedText,
  args: {
    children:
      'Passionate about frontend development. Eager to explore new tools and build awesome projects!',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeaturedText>;

type Story = StoryObj<typeof FeaturedText>;

export const Default: Story = {} satisfies Story;
