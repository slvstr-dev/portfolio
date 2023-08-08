import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

export default {
  title: 'ui/Link',
  component: Link,
  args: {
    children: 'Link',
    href: 'https://slvstr.dev',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Default: Story = {} satisfies Story;
