'use client';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { cn } from '@/src/utils/tailwindUtils';

export interface ItemProps extends NavigationMenuPrimitive.NavigationMenuItemProps {}

export function Item({ className, ...props }: ItemProps) {
  return <NavigationMenuPrimitive.Item className={cn('', className)} {...props} />;
}
