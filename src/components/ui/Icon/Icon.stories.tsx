import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

export default {
  title: 'ui/Icon',
  component: Icon,
  args: {
    icon: 'X',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {} satisfies Story;
