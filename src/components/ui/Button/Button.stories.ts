import type { Meta, StoryObj } from '@storybook/react';

import ButtonComponent from './Button';

export default {
  title: 'ui/Button',
  component: ButtonComponent,
  args: {
    children: 'Button',
    onClick: console.log,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonComponent>;

type Story = StoryObj<typeof ButtonComponent>;

export const Link: Story = {
  args: {
    href: 'https://slvstr.dev',
    onClick: undefined,
  },
} satisfies Story;

export const Button: Story = {} satisfies Story;

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
