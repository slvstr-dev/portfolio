import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import { Anchor } from '@/components/ui/Anchor/Anchor';
import { cn } from '@/src/utils/tailwindUtils';

export interface CopyrightProps extends PropsWithChildren {
  className?: string;
}

export const Copyright = ({ className }: CopyrightProps) => {
  const t = useTranslations('components.ui.copyright');

  return (
    <p className={cn('text-xl font-bold uppercase', className)}>
      {t.rich('date', {
        link: (chunks) => (
          <Anchor
            href="https://www.linkedin.com/in/sylvesterhofstra/"
            target="_blank"
            className="transition-opacity hover:opacity-50">
            {chunks}
          </Anchor>
        ),
        date: new Date().getFullYear(),
      })}
    </p>
  );
};
