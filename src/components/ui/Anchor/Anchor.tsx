import { AnchorHTMLAttributes, forwardRef, Ref } from 'react';

import NextIntlLink from 'next-intl/link';
import { tv, type VariantProps } from 'tailwind-variants';

type AnchorVariants = VariantProps<typeof anchor>;

export interface AnchorProps extends AnchorVariants, AnchorHTMLAttributes<HTMLAnchorElement> {}

export default forwardRef(function Anchor(
  { className, hasUnderline, href, ...props }: AnchorProps,
  ref: Ref<HTMLAnchorElement>,
) {
  const styles = anchor({ hasUnderline, className });

  return <NextIntlLink className={styles} href={{ pathname: href }} {...props} ref={ref} />;
});

const anchor = tv({
  base: 'transition-opacity hover:opacity-50 active:underline',
  variants: {
    hasUnderline: {
      true: 'underline hover:no-underline hover:opacity-100',
    },
  },
});
