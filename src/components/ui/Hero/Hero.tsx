import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import { cn } from '@/src/utils/tailwindUtils';

import Section from '../../layout/Container/Container';

export interface HeroProps extends PropsWithChildren {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  const t = useTranslations('components.hero');

  return (
    <Section className={cn('pb-20 pt-14', className)} isCentered>
      <h1 className="text-5xl italic">{t('title')}</h1>
    </Section>
  );
}
