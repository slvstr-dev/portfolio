import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import { Anchor } from '@/components/ui/Anchor/Anchor';
import { cn } from '@/src/utils/tailwindUtils';

export interface LogoProps extends PropsWithChildren {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const t = useTranslations('components.ui.logo');

  return (
    <span className={cn('text-3xl font-light transition-opacity hover:opacity-50', className)}>
      {t.rich('title', {
        tag: (chunks) => <Anchor href="/">{chunks}</Anchor>,
      })}
    </span>
  );
}
