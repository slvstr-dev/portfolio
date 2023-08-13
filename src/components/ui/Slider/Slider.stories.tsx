import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@/components/ui/Card/Card';

import { Slider } from './Slider';

export default {
  title: 'ui/Slider',
  component: Slider,
  render: (args) => (
    <Slider {...args}>
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
    </Slider>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {} satisfies Story;
