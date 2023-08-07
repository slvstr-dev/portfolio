'use client';

import { FormEvent, PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import Button from '@/components/ui/Button/Button';
import { cn } from '@/src/utils/tailwindUtils';

export interface ContactFormProps extends PropsWithChildren {
  className?: string;
  onSubmit?: () => void;
}

export default function ContactForm({ children, className, onSubmit, ...props }: ContactFormProps) {
  const t = useTranslations('components.forms.contact_form');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onSubmit) {
      console.log('Submit from ContactForm');

      return onSubmit();
    }

    console.log('Submit from ContactPage');
  };

  return (
    <form onSubmit={handleSubmit} className={cn('flex flex-col gap-4', className)} {...props}>
      {children}

      <div className="flex gap-2">
        <Button color="muted" size="lg" type="submit">
          {t('submit')}
        </Button>
      </div>
    </form>
  );
}
