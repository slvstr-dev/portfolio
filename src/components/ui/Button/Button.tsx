import { forwardRef, type ButtonHTMLAttributes, type ForwardedRef } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

import { Icon } from '@/components/ui/Icon/Icon';

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps
  extends ButtonVariants,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

export const Button = forwardRef(function Button(
  { children, isDisabled, isLoading, size, color, className, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const styles = button({ color, size, isDisabled, isLoading });

  return (
    <button className={styles.base({ className })} ref={ref} {...props}>
      {isLoading && <Icon icon="CircleNotch" className={styles.loader()} />}

      <span className={styles.label()}>{children}</span>
    </button>
  );
});

export const button = tv({
  slots: {
    base: 'relative inline-flex cursor-pointer items-center justify-center uppercase outline-theme-brand-300 transition-opacity hover:opacity-50 active:opacity-75',
    label: '',
    loader: 'absolute inset-0 animate-spin',
  },
  variants: {
    color: {
      brand: 'border border-theme-brand-200 bg-theme-brand-100 text-theme-brand-300',
      brandRing:
        'border border-theme-brand-200 bg-theme-brand-100 text-theme-brand-300 ring-4 ring-theme-brand-100',
      muted: 'border border-theme-muted bg-white',
      mutedRing: 'border border-theme-muted bg-white',
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
  },
});
