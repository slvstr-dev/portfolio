import type { Meta, StoryObj } from '@storybook/react';

import { ContactSection } from './ContactSection';

export default {
  title: 'ui/ContactSection',
  component: ContactSection,
  tags: ['autodocs'],
} satisfies Meta<typeof ContactSection>;

type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {} satisfies Story;
