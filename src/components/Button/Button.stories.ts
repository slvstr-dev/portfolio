import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'ui/Button',
  component: Button,
  args: {
    children: 'Button',
    onClick: () => {},
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
