import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'ui/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
