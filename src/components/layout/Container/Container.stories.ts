import type { Meta, StoryObj } from '@storybook/react';

import Container from './Container';

export default {
  title: 'ui/Container',
  component: Container,
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

type Story = StoryObj<typeof Container>;

export const Default: Story = {} satisfies Story;
