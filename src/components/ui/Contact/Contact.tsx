import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import Section from '@/components/layout/Container/Container';

export interface ContactProps extends PropsWithChildren {
  className?: string;
}

export default function Contact({ className }: ContactProps) {
  const t = useTranslations('components.contact');

  return (
    <Section className={twMerge('bg-pink-100', className)} isCentered>
      <h2 className="font-handwriting text-2xl italic">{t('title')}</h2>
    </Section>
  );
}
