'use client';

import { FormEvent, PropsWithChildren } from 'react';

import Dialog from '@/components/layout/Dialog/Dialog';
import Button from '@/components/ui/Button/Button';
import { cn } from '@/src/utils/tailwindUtils';

export interface ContactFormProps extends PropsWithChildren {
  className?: string;
  onSubmit?: () => void;
}

export default function ContactForm({ children, className, onSubmit, ...props }: ContactFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('submit');

    onSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit} className={cn('', className)} {...props}>
      {children}

      <div className="flex gap-2">
        <Dialog.Close>Cancel</Dialog.Close>

        <Button color="brand" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
