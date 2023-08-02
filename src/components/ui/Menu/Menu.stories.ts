import type { Meta, StoryObj } from '@storybook/react';

import Menu from './Menu';

export default {
  title: 'layout/Menu',
  component: Menu,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {} satisfies Story;
