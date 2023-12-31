import { type PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import { Anchor } from '@/components/ui/Anchor/Anchor';
import { cn } from '@/utils/tailwindUtils';

export interface CopyrightProps extends PropsWithChildren {
  className?: string;
}

export function Copyright({ className }: CopyrightProps) {
  const t = useTranslations('components.ui.copyright');

  return (
    <p className={cn('font-bold uppercase', className)}>
      {t.rich('date', {
        tag: (chunks) => (
          <Anchor
            href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE}
            target="_blank"
            className="transition-opacity hover:opacity-50">
            {chunks}
          </Anchor>
        ),
        date: new Date().getFullYear(),
      })}
    </p>
  );
}
