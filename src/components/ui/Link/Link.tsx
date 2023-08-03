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

export default function Link({ children, className, ...props }: LinkProps) {
  if ('href' in props) {
    return (
      <NextIntlLink className={className} href={{ pathname: props.href }} target={props.target}>
        {children}
      </NextIntlLink>
    );
  }

  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
}
