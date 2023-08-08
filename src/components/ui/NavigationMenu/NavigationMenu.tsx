'use client';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { Item } from './internal/Item';
import { Link } from './internal/Link';
import { List } from './internal/List';

export interface NavigationMenuProps extends NavigationMenuPrimitive.NavigationMenuProps {}

export function NavigationMenu({ ...props }: NavigationMenuProps) {
  return <NavigationMenuPrimitive.Root {...props} />;
}

NavigationMenu.List = List;
NavigationMenu.Item = Item;
NavigationMenu.Link = Link;
