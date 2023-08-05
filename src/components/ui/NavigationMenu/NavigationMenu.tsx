'use client';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { cn } from '@/src/utils/tailwindUtils';

import { Item } from './internal/Item/Item';
import { Link } from './internal/Link/Link';
import { List } from './internal/List/List';

export interface NavigationMenuProps extends NavigationMenuPrimitive.NavigationMenuProps {}

export const NavigationMenu = ({ className, ...props }: NavigationMenuProps) => {
  return <NavigationMenuPrimitive.Root className={cn('', className)} {...props} />;
};

NavigationMenu.List = List;
NavigationMenu.Item = Item;
NavigationMenu.Link = Link;
