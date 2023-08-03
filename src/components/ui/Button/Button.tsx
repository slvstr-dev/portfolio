import { tv, type VariantProps } from 'tailwind-variants';

import Icon from '@/components/ui/Icon/Icon';
import Link, { LinkProps } from '@/components/ui/Link/Link';
import { cn } from '@/src/utils/tailwindUtils';

type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = ButtonVariants & LinkProps;

export default function Button({
  children,
  isDisabled,
  isLoading,
  size,
  color,
  className,
  ...props
}: ButtonProps) {
  const styles = button({ color, size, isDisabled, isLoading });

  return (
    <Link className={cn(styles.base(), className)} {...props}>
      {isLoading && <Icon icon="Loader" className={styles.loader()} />}

      <span className={styles.label()}>{children}</span>
    </Link>
  );
}

const button = tv({
  base: 'relative inline-flex cursor-pointer items-center justify-center border-2 font-monospace transition-opacity hover:opacity-50 active:opacity-75',
  slots: {
    label: 'font-bold uppercase',
    loader: 'absolute inset-0',
  },
  variants: {
    color: {
      brand: 'border-theme-brand-200 text-theme-brand-300',
      muted: 'border-theme-muted',
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
    size: {
      sm: 'px-2 text-sm',
      md: 'px-4 py-1 text-base',
      lg: 'px-6 py-2 text-lg',
    },
  },
  defaultVariants: {
    isDisabled: false,
    isLoading: false,
    size: 'md',
    color: 'muted',
  },
});
