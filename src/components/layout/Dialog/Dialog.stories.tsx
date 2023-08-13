import type { Meta, StoryObj } from '@storybook/react';

import { Dialog } from './Dialog';

export default {
  title: 'ui/Dialog',
  component: Dialog,
  args: {
    children: 'Dialog',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

type Story = StoryObj<typeof Dialog>;

export const Modal: Story = {
  args: {
    modal: true,
    children: <Dialog.Modal>Modal</Dialog.Modal>,
  },
} satisfies Story;

export const Sidebar: Story = {
  args: {
    children: <Dialog.Sidebar>Sidebar</Dialog.Sidebar>,
  },
} satisfies Story;
