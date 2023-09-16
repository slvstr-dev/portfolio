import type { Meta, StoryObj } from '@storybook/react';

import { Title } from '@/components/ui/Title/Title';

import { IconsWrapper } from './IconsWrapper';

export default {
  title: 'ui/IconsWrapper',
  component: IconsWrapper,
  tags: ['autodocs'],
  args: {
    icons: ['HTML', 'JS', 'CSS', 'Terminal'],
    children: <Title>Frontend developer</Title>,
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconsWrapper>;

type Story = StoryObj<typeof IconsWrapper>;

export const Default: Story = {} satisfies Story;

export const Brand: Story = {
  args: {
    color: 'brand',
  },
} satisfies Story;
