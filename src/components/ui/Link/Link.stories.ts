import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';

const meta = {
  title: 'ui/Link',
  component: Link,
  args: {
    children: 'Link',
    href: 'https://example.com',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Underline: Story = {
  args: {
    hasUnderline: true,
  },
};
