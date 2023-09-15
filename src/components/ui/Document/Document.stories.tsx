import type { Meta, StoryObj } from '@storybook/react';

import { Title } from '@/components/ui/Title/Title';

import { Document } from './Document';

export default {
  title: 'ui/Document',
  component: Document,
  tags: ['autodocs'],
} satisfies Meta<typeof Document>;

type Story = StoryObj<typeof Document>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Title>Title</Title>

        <h3 className="font-monospace uppercase text-theme-brand-200">Subtitle</h3>

        <p className="font-monospace">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim asperiores perspiciatis
          aspernatur voluptatem, officiis at possimus, ut consequatur, similique natus illum odit
          omnis aut aliquid fuga velit sit nam architecto. Laboriosam voluptate accusamus odio
          similique enim nihil quia voluptates velit, eligendi quo est assumenda nam minima?
          Quaerat, tempore magni fugit excepturi reiciendis corrupti, natus quidem inventore animi
          exercitationem, est maxime.
        </p>
      </>
    ),
  },
} satisfies Story;
