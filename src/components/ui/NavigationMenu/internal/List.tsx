'use client';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

export interface ListProps extends NavigationMenuPrimitive.NavigationMenuListProps {}

export function List(props: ListProps) {
  return <NavigationMenuPrimitive.List {...props} />;
}
