import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import Section from '@/components/layout/Container/Container';
import { cn } from '@/src/utils/tailwindUtils';

export interface ContactProps extends PropsWithChildren {
  className?: string;
}

export default function Contact({ className }: ContactProps) {
  const t = useTranslations('components.contact');

  return (
    <Section className={cn('bg-theme-brand-100', className)} isCentered>
      <h2 className="text-2xl italic">{t('title')}</h2>
    </Section>
  );
}
