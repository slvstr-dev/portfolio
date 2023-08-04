'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { ContactForm } from '@/components/forms/ContactForm';
import { Dialog } from '@/components/layout/Dialog/Dialog';
import { Button } from '@/components/ui/Button/Button';

export const ContactDialog = () => {
  const t = useTranslations('components.layout.header');
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button color="brand" className="font-monospace font-bold">
          {t('buttons.contact')}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content title={t('contact_form.title')}>
        <ContactForm onSubmit={() => setOpen(false)} />
      </Dialog.Content>
    </Dialog>
  );
};
