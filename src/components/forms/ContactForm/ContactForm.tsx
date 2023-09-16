'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { ContactFormSchema, contactFormSchema } from '@/types/zod';
import { cn } from '@/utils/tailwindUtils';

export interface ContactFormProps {
  className?: string;
  onSubmit?: () => void;
}

export function ContactForm({ className, onSubmit }: ContactFormProps) {
  const t = useTranslations('components.forms.contact_form');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleFormSubmit = (data: ContactFormSchema) => {
    window.location.href = `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}?subject=${
      data?.subject || t('subject')
    }&body=${data.body}`;

    reset();

    onSubmit?.();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={cn('flex flex-col items-center gap-6', className)}>
      <Input
        className="w-full"
        placeholder={t('fields.subject.placeholder')}
        register={register('subject')}
      />

      <Input
        className="w-full"
        placeholder={t('fields.body.placeholder')}
        errorMessage={errors.body?.message}
        register={register('body')}
      />

      <Button className="max-w-max" color="muted" size="lg" type="submit" isLoading={isSubmitting}>
        {t('buttons.submit')}
      </Button>
    </form>
  );
}
