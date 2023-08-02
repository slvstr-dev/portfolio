import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import Anchor from '@/components/ui/Anchor/Anchor';

export interface LogoProps extends PropsWithChildren {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  const t = useTranslations('components.logo');

  return (
    <span
      className={twMerge(
        'font-display text-3xl font-light transition-opacity hover:opacity-50',
        className,
      )}>
      {t.rich('title', {
        link: (chunks) => <Anchor href="/">{chunks}</Anchor>,
      })}
    </span>
  );
}
