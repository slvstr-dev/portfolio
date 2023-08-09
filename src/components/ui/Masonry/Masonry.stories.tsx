import type { Meta, StoryObj } from '@storybook/react';

import { Masonry } from './Masonry';

export default {
  title: 'ui/Masonry',
  component: Masonry,
  args: {
    images: [
      {
        src: 'https://placehold.co/600x400/png',
      },
      {
        src: 'https://placehold.co/600x400/png',
      },
      {
        src: 'https://placehold.co/600x400/png',
      },
      {
        src: 'https://placehold.co/600x400/png',
      },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Masonry>;

type Story = StoryObj<typeof Masonry>;

export const Default: Story = {} satisfies Story;
