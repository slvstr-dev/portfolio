'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { ContactForm } from '@/components/forms/ContactForm/ContactForm';
import { Dialog } from '@/components/layout/Dialog/Dialog';
import { Button } from '@/components/ui/Button/Button';

export function ContactModal() {
  const t = useTranslations('components.dialogs.contact_modal');
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} modal>
      <Dialog.Trigger asChild>
        <Button color="brandRing" className="font-monospace font-bold tracking-wider" size="lg">
          {t('buttons.trigger')}
        </Button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Content
            title={t.rich('title', {
              tag: (chunks) => (
                <span className="text-5xl font-normal uppercase italic">{chunks}</span>
              ),
            })}
            description={t('description')}>
            <ContactForm onSubmit={handleSubmit} />
          </Dialog.Content>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
