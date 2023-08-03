'use client';

import { useTranslations } from 'next-intl';

import ContactForm from '@/components/forms/ContactForm';
import Dialog from '@/components/layout/Dialog/Dialog';
import { useBoolean } from '@/hooks/useBoolean';

export default function ContactDialog() {
  const t = useTranslations('components.header');
  const { value: open, setTrue: onOpenChange, setFalse: close } = useBoolean(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger>
        {/* <Button color="brand">{t('buttons.contact')}</Button> */}
        Open
      </Dialog.Trigger>

      <Dialog.Content title={t('contact_form.title')}>
        <ContactForm onSubmit={close} />
      </Dialog.Content>
    </Dialog>
  );
}
