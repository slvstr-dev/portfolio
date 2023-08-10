import type { Meta, StoryObj } from '@storybook/react';

import { Title } from './Title';

export default {
  title: 'ui/Title',
  component: Title,
  args: {
    children: 'Passionate about frontend development',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

type Story = StoryObj<typeof Title>;

export const Default: Story = {} satisfies Story;
