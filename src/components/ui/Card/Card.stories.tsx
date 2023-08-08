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
      <Card.Content>
        <h3 className="text-xl font-bold uppercase">Card</h3>

        <p className="text-center text-3xl lowercase italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </Card.Content>
    ),
  },
} satisfies Story;

export const Image: Story = {
  args: {
    children: <Card.Image src="https://placehold.co/600x400/png" />,
  },
} satisfies Story;

export const Both: Story = {
  args: {
    children: (
      <>
        <Card.Image src="https://placehold.co/600x400/png" />

        <Card.Content>
          <h3 className="text-xl font-bold uppercase">Card</h3>

          <p className="text-center text-3xl lowercase italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </Card.Content>
      </>
    ),
  },
} satisfies Story;

export const Orientation: Story = {
  args: {
    ...Both.args,
    orientation: 'columnReverse',
    children: (
      <>
        <Card.Image src="https://placehold.co/600x400/png" />

        <Card.Content>
          <h3 className="text-xl font-bold uppercase">Card</h3>

          <p className="text-center text-3xl lowercase italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </Card.Content>
      </>
    ),
  },
} satisfies Story;
