import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'layout/Footer',
  component: Footer,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {} satisfies Story;
