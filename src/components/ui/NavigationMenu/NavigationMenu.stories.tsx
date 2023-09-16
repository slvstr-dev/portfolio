import type { Meta, StoryObj } from '@storybook/react';

import { NavigationMenu } from './NavigationMenu';

export default {
  title: 'ui/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  args: {
    children: (
      <NavigationMenu.List className="flex gap-8">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/projects">Projects</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/experience">Experience</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/skills">Skills</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    ),
  },
} satisfies Story;
