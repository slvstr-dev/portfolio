import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

export default {
  title: 'ui/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {} satisfies Story;
