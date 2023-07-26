import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta = {
  title: 'ui/Icon',
  component: Icon,
  args: {
    icon: 'Loader',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
