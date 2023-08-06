import type { Meta, StoryObj } from '@storybook/react';

import { Link as LinkComponent } from './Link';

export default {
  title: 'ui/Link',
  component: LinkComponent,
  args: {
    children: 'Link',
    href: 'https://slvstr.dev',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkComponent>;

type Story = StoryObj<typeof LinkComponent>;

export const Default: Story = {} satisfies Story;
