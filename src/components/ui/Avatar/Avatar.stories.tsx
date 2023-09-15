import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
  title: 'ui/Avatar',
  component: Avatar,
  args: {
    src: 'https://placehold.co/600x400/png',
    name: 'Sylvester Hofstra',
    company: 'ACME',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {} satisfies Story;
