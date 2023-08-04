import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import { Container } from '@/components/layout/Container/Container';
import { cn } from '@/src/utils/tailwindUtils';

export interface HeroProps extends PropsWithChildren {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  const t = useTranslations('components.ui.hero');

  return (
    <Container className={cn('pb-20 pt-14', className)} isCentered>
      <h1 className="text-5xl italic">{t('title')}</h1>
    </Container>
  );
};
