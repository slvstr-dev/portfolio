import type { Meta, StoryObj } from '@storybook/react';

import { Masonry } from './Masonry';

export default {
  title: 'ui/Masonry',
  component: Masonry,
  tags: ['autodocs'],
} satisfies Meta<typeof Masonry>;

type Story = StoryObj<typeof Masonry>;

export const Default: Story = {} satisfies Story;
