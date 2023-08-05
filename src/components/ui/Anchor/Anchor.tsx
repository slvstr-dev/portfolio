import { forwardRef } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

import { Link, LinkProps } from '@/components/ui/Link/Link';
import { cn } from '@/src/utils/tailwindUtils';

type AnchorVariants = VariantProps<typeof anchor>;

export type AnchorProps = AnchorVariants & LinkProps;

export const Anchor = forwardRef<typeof Link, AnchorProps>(function Anchor(
  { children, className, hasUnderline, ...props },
  ref,
) {
  const styles = anchor({ hasUnderline });

  return (
    <Link className={cn(styles, className)} {...props} ref={ref}>
      {children}
    </Link>
  );
});

const anchor = tv({
  base: 'transition-opacity hover:opacity-50 active:underline',
  variants: {
    hasUnderline: {
      true: 'underline hover:no-underline hover:opacity-100',
    },
  },
});
