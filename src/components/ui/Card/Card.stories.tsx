import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'ui/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Content: Story = {
  args: {
    children: (
      <>
        <h3 className="text-4xl uppercase italic">Card</h3>

        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      </>
    ),
  },
} satisfies Story;

export const Image: Story = {
  args: {
    src: 'https://placehold.co/600x400/png',
  },
} satisfies Story;

export const Caption: Story = {
  args: {
    ...Image.args,
    caption: 'This is a caption',
  },
};

export const Both: Story = {
  args: {
    ...Image.args,
    children: (
      <>
        <h3 className="text-4xl uppercase italic">Card</h3>

        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      </>
    ),
  },
} satisfies Story;

export const Orientation: Story = {
  args: {
    ...Both.args,
    orientation: 'horizontal',
  },
} satisfies Story;

export const Reverse: Story = {
  args: {
    ...Both.args,
    isReverse: true,
  },
} satisfies Story;
