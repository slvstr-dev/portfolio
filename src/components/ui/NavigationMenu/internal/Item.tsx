import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

export interface ItemProps extends NavigationMenuPrimitive.NavigationMenuItemProps {}

export function Item(props: ItemProps) {
  return <NavigationMenuPrimitive.Item {...props} />;
}
