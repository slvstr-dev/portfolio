import type { Meta, StoryObj } from '@storybook/react';

import { NavigationMenu } from './NavigationMenu';

export default {
  title: 'layout/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {} satisfies Story;
