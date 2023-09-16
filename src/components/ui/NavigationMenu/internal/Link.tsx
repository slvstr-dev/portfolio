import { usePathname } from 'next/navigation';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { Anchor } from '@/components/ui/Anchor/Anchor';
import { cn } from '@/utils/tailwindUtils';

export interface LinkProps extends NavigationMenuPrimitive.NavigationMenuLinkProps {
  isLight?: boolean;
}

export function Link({ className, children, isLight, ...props }: LinkProps) {
  const pathname = usePathname();
  const isActive = !!props?.href && pathname === props.href;

  return (
    <NavigationMenuPrimitive.Link {...props} asChild>
      <Anchor
        className={cn('font-monospace', className, {
          'font-bold': isActive,
          'text-white': isLight,
        })}
        hasUnderline={isActive}>
        {children}
      </Anchor>
    </NavigationMenuPrimitive.Link>
  );
}
