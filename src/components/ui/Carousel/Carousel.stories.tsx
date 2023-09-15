import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@/components/ui/Card/Card';

import { Carousel } from './Carousel';

export default {
  title: 'ui/Carousel',
  component: Carousel,
  render: (args) => (
    <Carousel {...args}>
      {Array.from({ length: 5 }, (_, i) => (
        <Card key={i} src="https://placehold.co/600x400/png">
          <h3 className="text-4xl uppercase italic">Card #{i + 1}</h3>

          {Array.from({ length: i + 1 }, (_, j) => (
            <p key={j} className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          ))}
        </Card>
      ))}
    </Carousel>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {} satisfies Story;
