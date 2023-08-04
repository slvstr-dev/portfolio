import type { Meta, StoryObj } from '@storybook/react';

import { Quote } from './Quote';

export default {
  title: 'ui/Quote',
  component: Quote,
  args: {
    children:
      'Passionate about frontend development. Eager to explore new tools and build awesome projects!',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Quote>;

type Story = StoryObj<typeof Quote>;

export const Default: Story = {} satisfies Story;
