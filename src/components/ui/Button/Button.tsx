import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';

import Link from 'next-intl/link';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

import Icon from '@/components/ui/Icon/Icon';

type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = PropsWithChildren<ButtonVariants> & {
  className?: string;
} & (
    | {
        href: string;
        target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
      }
    | {
        type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
        onClick: <T>(event?: T) => void | Promise<void>;
      }
  );

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

  if ('href' in props) {
    return (
      <Link
        className={twMerge(styles.base(), className)}
        href={{ pathname: props.href }}
        target={props.target}>
        {children}
      </Link>
    );
  }
  return (
    <button className={twMerge(styles.base(), className)} disabled={isDisabled} {...props}>
      {isLoading && <Icon icon="Loader" className={styles.loader()} />}

      <span className={styles.label()}>{children}</span>
    </button>
  );
}

const button = tv({
  base: 'relative inline-flex cursor-pointer items-center justify-center border-2 transition-opacity hover:opacity-75 active:opacity-75',
  slots: {
    label: 'font-bold uppercase',
    loader: 'absolute inset-0',
  },
  variants: {
    color: {
      gray: 'border-gray text-black',
      pink: 'border-pink-200 text-pink-300',
    },
    isDisabled: {
      true: 'pointer-events-none opacity-50',
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
    color: 'gray',
  },
});
