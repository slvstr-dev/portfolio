import { forwardRef } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

import { Icon } from '@/components/ui/Icon/Icon';
import { Link, LinkProps } from '@/components/ui/Link/Link';

type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = ButtonVariants & LinkProps;

export const Button = forwardRef<typeof Link, ButtonProps>(function Button(
  { children, isDisabled, isLoading, size, color, className, ...props },
  ref,
) {
  const styles = button({ color, size, isDisabled, isLoading });

  return (
    <Link className={styles.base({ className })} {...props} ref={ref}>
      {isLoading && <Icon icon="Update" className={styles.loader()} />}

      <span className={styles.label()}>{children}</span>
    </Link>
  );
});

const button = tv({
  base: 'relative inline-flex cursor-pointer items-center justify-center border uppercase transition-opacity hover:opacity-50 active:opacity-75',
  slots: {
    label: '',
    loader: 'absolute inset-0 animate-spin',
  },
  variants: {
    color: {
      brand: 'border-theme-brand-200 bg-theme-brand-100 text-theme-brand-300',
      brandRing:
        'border-theme-brand-200 bg-theme-brand-100 text-theme-brand-300 ring-4 ring-theme-brand-100',
      muted: 'border-theme-muted bg-white',
      mutedRing: 'border-theme-muted bg-white ring-4 ring-theme-muted',
    },
    size: {
      sm: 'px-2 text-sm',
      md: 'px-4 py-1 text-base',
      lg: 'px-6 py-2 text-lg',
    },

    isDisabled: {
      true: 'pointer-events-none opacity-25',
    },
    isLoading: {
      true: {
        base: 'pointer-events-none',
        label: 'invisible',
      },
    },
  },
  defaultVariants: {
    isDisabled: false,
    isLoading: false,
    size: 'md',
  },
});
