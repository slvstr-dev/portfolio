import type { Meta, StoryObj } from '@storybook/react';

import LocaleSwitcher from './LocaleSwitcher';

const meta = {
  title: 'ui/LocaleSwitcher',
  component: LocaleSwitcher,
  args: {
    locale: 'nl-NL',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LocaleSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
