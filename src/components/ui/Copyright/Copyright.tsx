import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import { Container } from '@/components/layout/Container/Container';
import { Anchor } from '@/components/ui/Anchor/Anchor';
import { cn } from '@/src/utils/tailwindUtils';

export interface CopyrightProps extends PropsWithChildren {
  className?: string;
}

export const Copyright = ({ className }: CopyrightProps) => {
  const t = useTranslations('components.ui.copyright');

  return (
    <Container className={cn('', className)} verticalPadding="lg">
      <h2 className="text-xl font-bold uppercase">
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
      </h2>
    </Container>
  );
};
