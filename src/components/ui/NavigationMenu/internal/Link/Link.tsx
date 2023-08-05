'use client';

import { usePathname } from 'next/navigation';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { Anchor } from '@/components/ui/Anchor/Anchor';
import { cn } from '@/src/utils/tailwindUtils';

export interface LinkProps extends NavigationMenuPrimitive.NavigationMenuLinkProps {}

export const Link = ({ className, children, ...props }: LinkProps) => {
  const pathname = usePathname();
  const isActive = !!props?.href && pathname === props.href;

  return (
    <NavigationMenuPrimitive.Link {...props} asChild>
      <Anchor
        className={cn('font-monospace', className, { 'font-bold': isActive })}
        hasUnderline={isActive}>
        {children}
      </Anchor>
    </NavigationMenuPrimitive.Link>
  );
};
