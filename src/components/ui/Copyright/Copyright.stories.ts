import type { Meta, StoryObj } from '@storybook/react';

import Copyright from './Copyright';

export default {
  title: 'ui/Copyright',
  component: Copyright,
  tags: ['autodocs'],
} satisfies Meta<typeof Copyright>;

type Story = StoryObj<typeof Copyright>;

export const Default: Story = {} satisfies Story;
