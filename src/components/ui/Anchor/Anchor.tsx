import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';

import Link from 'next-intl/link';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

type AnchorVariants = VariantProps<typeof anchor>;

export type AnchorProps = PropsWithChildren<AnchorVariants> & {
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

export default function Anchor({ children, className, hasUnderline, ...props }: AnchorProps) {
  const styles = anchor({ hasUnderline });

  if ('href' in props) {
    return (
      <Link className={twMerge(styles)} href={{ pathname: props.href }} target={props.target}>
        {children}
      </Link>
    );
  }

  return (
    <button className={twMerge(styles, className)} {...props}>
      {children}
    </button>
  );
}

const anchor = tv({
  base: 'transition-opacity hover:opacity-50 active:underline',
  variants: {
    hasUnderline: {
      true: 'underline hover:no-underline hover:opacity-100',
    },
  },
});
