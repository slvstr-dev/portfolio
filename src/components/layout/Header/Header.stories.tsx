import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

export default {
  title: 'layout/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {} satisfies Story;
