import type { Meta, StoryObj } from '@storybook/react';

import { AspectRatio } from './AspectRatio';

export default {
  title: 'ui/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {} satisfies Story;
