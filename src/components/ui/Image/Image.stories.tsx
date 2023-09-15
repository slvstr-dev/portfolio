import type { Meta, StoryObj } from '@storybook/react';

import { Image } from './Image';

export default {
  title: 'ui/Image',
  component: Image,
  args: {
    src: 'https://placehold.co/600x400/png',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {} satisfies Story;
