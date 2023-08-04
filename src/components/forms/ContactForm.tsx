'use client';

import { FormEvent, PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/src/utils/tailwindUtils';

export interface ContactFormProps extends PropsWithChildren {
  className?: string;
  onSubmit?: () => void;
}

export const ContactForm = ({ children, className, onSubmit, ...props }: ContactFormProps) => {
  const t = useTranslations('components.forms.contact_form');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('submit');

    onSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit} className={cn('', className)} {...props}>
      {children}

      <div className="flex gap-2">
        <Button className="bg-white" size="lg" type="submit">
          {t('submit')}
        </Button>
      </div>
    </form>
  );
};
