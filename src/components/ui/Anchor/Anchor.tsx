import { AnchorHTMLAttributes, forwardRef } from 'react';

import NextIntlLink from 'next-intl/link';
import { tv, type VariantProps } from 'tailwind-variants';

type AnchorVariants = VariantProps<typeof anchor>;

export interface AnchorProps extends AnchorVariants, AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Anchor = forwardRef<typeof NextIntlLink, AnchorProps>(function Anchor(
  { className, hasUnderline, href, ...props },
  ref,
) {
  const styles = anchor({ hasUnderline, className });

  return (
    <NextIntlLink className={styles} href={{ pathname: href }} {...props} ref={ref as never} />
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
