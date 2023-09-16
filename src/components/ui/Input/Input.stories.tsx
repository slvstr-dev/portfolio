import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'ui/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Placeholder',
  },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {} satisfies Story;
