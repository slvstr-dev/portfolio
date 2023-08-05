import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';

import NextIntlLink from 'next-intl/link';

export type LinkProps = PropsWithChildren & {
  className?: string;
} & (
    | {
        href: string;
        target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
      }
    | {
        type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
        onClick?: <T>(event?: T) => void | Promise<void>;
      }
  );

export const Link = forwardRef(function Link({ children, className, ...props }: LinkProps, ref) {
  if ('href' in props) {
    return (
      <NextIntlLink
        className={className}
        {...props}
        href={{ pathname: props.href }}
        ref={ref as never}>
        {children}
      </NextIntlLink>
    );
  }

  return (
    <button className={className} type="button" {...props} ref={ref as never}>
      {children}
    </button>
  );
});
