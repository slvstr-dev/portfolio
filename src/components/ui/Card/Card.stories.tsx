import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';
import ContentComponent from './internal/Content';
import ImageComponent from './internal/Image';

export default {
  title: 'ui/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Content: Story = {
  args: {
    children: (
      <ContentComponent>
        <h3 className="text-xl font-bold uppercase">Card</h3>

        <p className="text-center text-3xl lowercase italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </ContentComponent>
    ),
  },
} satisfies Story;

export const Image: Story = {
  args: {
    children: <ImageComponent src="https://placehold.co/600x400/png" />,
  },
} satisfies Story;

export const Both: Story = {
  args: {
    children: (
      <>
        <ImageComponent src="https://placehold.co/600x400/png" />

        <ContentComponent>
          <h3 className="text-xl font-bold uppercase">Card</h3>

          <p className="text-center text-3xl lowercase italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </ContentComponent>
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
        <ImageComponent src="https://placehold.co/600x400/png" />

        <ContentComponent>
          <h3 className="text-xl font-bold uppercase">Card</h3>

          <p className="text-center text-3xl lowercase italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </ContentComponent>
      </>
    ),
  },
} satisfies Story;
