import type { Meta, StoryObj } from '@storybook/react';

import { Seperator } from './Seperator';

export default {
  title: 'ui/Seperator',
  component: Seperator,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Seperator>;

type Story = StoryObj<typeof Seperator>;

export const Default: Story = {} satisfies Story;
