import type { Meta, StoryObj } from '@storybook/react';

import { MasonryBlock } from './MasonryBlock';

export default {
  title: 'ui/MasonryBlock',
  component: MasonryBlock,
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
} satisfies Meta<typeof MasonryBlock>;

type Story = StoryObj<typeof MasonryBlock>;

export const Default: Story = {} satisfies Story;
