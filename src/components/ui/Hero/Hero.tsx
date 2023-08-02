import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import Section from '../../layout/Container/Container';

export interface HeroProps extends PropsWithChildren {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  const t = useTranslations('components.hero');

  return (
    <Section className={twMerge('pb-20 pt-14', className)} isCentered>
      <h1 className="font-handwriting text-5xl italic">{t('title')}</h1>
    </Section>
  );
}
