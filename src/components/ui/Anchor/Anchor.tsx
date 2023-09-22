import { forwardRef, type AnchorHTMLAttributes, type Ref } from 'react';

import NextIntlLink from 'next-intl/link';
import { tv, type VariantProps } from 'tailwind-variants';

type AnchorVariants = VariantProps<typeof anchor>;

export interface AnchorProps extends AnchorVariants, AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Anchor = forwardRef(function Anchor(
  { className, hasUnderline, href, ...props }: AnchorProps,
  ref: Ref<HTMLAnchorElement>,
) {
  const styles = anchor({ hasUnderline, className });

  return <NextIntlLink className={styles} href={href as never} {...props} ref={ref} />;
});

const anchor = tv({
  base: 'text-theme-brand-300 outline-theme-brand-300 transition-opacity hover:opacity-50 active:underline',
  variants: {
    isItalic: {
      true: 'italic',
    },
    hasUnderline: {
      true: 'underline hover:no-underline hover:opacity-100',
    },
  },
});
