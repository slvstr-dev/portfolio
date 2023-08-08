import type { Meta, StoryObj } from '@storybook/react';

import { Error } from './Error';

export default {
  title: 'ui/Error',
  component: Error,
  tags: ['autodocs'],
} satisfies Meta<typeof Error>;

type Story = StoryObj<typeof Error>;

export const Default: Story = {} satisfies Story;
