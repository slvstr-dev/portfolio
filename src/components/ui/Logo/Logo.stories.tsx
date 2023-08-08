import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

export default {
  title: 'ui/Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {} satisfies Story;
