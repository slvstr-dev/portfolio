import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

export default {
  title: 'layout/Page',
  component: Page,
  tags: ['autodocs'],
} satisfies Meta<typeof Page>;

type Story = StoryObj<typeof Page>;

export const Default: Story = {} satisfies Story;
