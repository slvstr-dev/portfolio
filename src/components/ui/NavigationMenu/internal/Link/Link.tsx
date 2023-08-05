'use client';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { Anchor } from '@/components/ui/Anchor/Anchor';
import { cn } from '@/src/utils/tailwindUtils';

export interface LinkProps extends NavigationMenuPrimitive.NavigationMenuLinkProps {}

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <NavigationMenuPrimitive.Link className={cn('', className)} {...props} asChild>
      <Anchor className="font-monospace">{children}</Anchor>
    </NavigationMenuPrimitive.Link>
  );
};
