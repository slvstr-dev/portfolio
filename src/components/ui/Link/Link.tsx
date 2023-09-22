import type { AnchorHTMLAttributes } from 'react';

import NextIntlLink from 'next-intl/link';
import type { VariantProps } from 'tailwind-variants';

import { button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';

type ButtonVariants = VariantProps<typeof button>;

export interface LinkProps
  extends ButtonVariants,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {}

export function Link({
  children,
  className,
  href,
  color,
  size,
  isDisabled,
  isLoading,
  ...props
}: LinkProps) {
  const styles = button({ color, size, isDisabled, isLoading });

  return (
    <NextIntlLink className={styles.base({ className })} href={{ pathname: href }} {...props}>
      {isLoading && <Icon icon="CircleNotch" className={styles.loader()} />}

      <span className={styles.label()}>{children}</span>
    </NextIntlLink>
  );
}
