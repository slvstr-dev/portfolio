import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@/components/ui/Card/Card';

import { Timeline } from './Timeline';

export default {
  title: 'ui/Timeline',
  component: Timeline,
  args: {
    year: 1990,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam',
  },
  tags: ['autodocs'],
  render: (args) => (
    <Timeline {...args}>
      {Array.from({ length: 5 }, (_, i) => (
        <Timeline.Item key={i} year={1990 + i}>
          <Card src="https://placehold.co/600x400/png">
            <h3 className="text-4xl uppercase italic">Card #{i + 1}</h3>

            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </Card>
        </Timeline.Item>
      ))}
    </Timeline>
  ),
} satisfies Meta<typeof Timeline>;

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {} satisfies Story;
