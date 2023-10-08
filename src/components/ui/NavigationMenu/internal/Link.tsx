import { usePathname } from 'next/navigation';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { tv, type VariantProps } from 'tailwind-variants';

import { Anchor } from '@/components/ui/Anchor/Anchor';

type LinkVariants = VariantProps<typeof link>;

export interface LinkProps extends LinkVariants, NavigationMenuPrimitive.NavigationMenuLinkProps {}

export function Link({ className, children, isLight, ...props }: LinkProps) {
  const pathname = usePathname();
  const isActive = !!props?.href && pathname === props.href;

  return (
    <NavigationMenuPrimitive.Link {...props} asChild>
      <Anchor className={link({ className, isActive, isLight })} hasUnderline={isActive}>
        {children}
      </Anchor>
    </NavigationMenuPrimitive.Link>
  );
}

const link = tv({
  base: 'font-monospace',
  variants: {
    isActive: {
      true: 'font-bold',
    },
    isLight: {
      true: 'text-white',
    },
  },
});
