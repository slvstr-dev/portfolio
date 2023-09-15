import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'ui/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {} satisfies Story;

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
} satisfies Story;

export const Loading: Story = {
  args: {
    isLoading: true,
  },
} satisfies Story;
