import type { Meta, StoryObj } from '@storybook/react';

import { Anchor } from './Anchor';

export default {
  title: 'ui/Anchor',
  component: Anchor,
  args: {
    children: 'Anchor',
    href: 'https://slvstr.dev',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Anchor>;

type Story = StoryObj<typeof Anchor>;

export const Link: Story = {} satisfies Story;

export const Button: Story = {
  args: {
    href: undefined,
    onClick: console.log,
  },
} satisfies Story;

export const Underline: Story = {
  args: {
    hasUnderline: true,
  },
} satisfies Story;