import type { Meta, StoryObj } from '@storybook/react';

import { Contact } from './Contact';

export default {
  title: 'ui/Contact',
  component: Contact,
  tags: ['autodocs'],
} satisfies Meta<typeof Contact>;

type Story = StoryObj<typeof Contact>;

export const Default: Story = {} satisfies Story;
