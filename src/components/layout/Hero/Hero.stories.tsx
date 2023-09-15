import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';

export default {
  title: 'ui/Hero',
  component: Hero,
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    children: 'Hero',
  },
} satisfies Story;
