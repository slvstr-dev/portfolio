import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';

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

export const Link = ({ children, className, ...props }: LinkProps) => {
  if ('href' in props) {
    return (
      <NextIntlLink className={className} {...props} href={{ pathname: props.href }}>
        {children}
      </NextIntlLink>
    );
  }

  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
};
