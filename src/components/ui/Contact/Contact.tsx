import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import { ContactForm } from '@/components/forms/ContactForm';
import { cn } from '@/src/utils/tailwindUtils';

export interface ContactProps extends PropsWithChildren {
  className?: string;
}

export const Contact = ({ className }: ContactProps) => {
  const t = useTranslations('components.ui.contact');

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <h2 className="l text-center text-4xl lowercase italic">
        {t.rich('title', {
          tag: (chunks) => <span className="text-5xl font-normal uppercase italic">{chunks}</span>,
        })}
      </h2>

      <h3 className="text-center text-3xl lowercase italic">{t('subtitle')}</h3>

      <ContactForm className="mt-6" />
    </div>
  );
};
