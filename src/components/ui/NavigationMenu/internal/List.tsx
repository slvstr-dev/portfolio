'use client';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { cn } from '@/src/utils/tailwindUtils';

export interface ListProps extends NavigationMenuPrimitive.NavigationMenuListProps {}

export default function List({ className, ...props }: ListProps) {
  return <NavigationMenuPrimitive.List className={cn('flex gap-8', className)} {...props} />;
}
