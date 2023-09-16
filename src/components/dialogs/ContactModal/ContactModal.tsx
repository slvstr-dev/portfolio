import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { ContactForm } from '@/components/forms/ContactForm/ContactForm';
import { Dialog } from '@/components/layout/Dialog/Dialog';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/utils/tailwindUtils';

export interface ContactModalProps {
  className?: string;
}

export function ContactModal({ className }: ContactModalProps) {
  const t = useTranslations('components.dialogs.contact_modal');
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} modal>
      <Dialog.Trigger asChild>
        <Button
          color="brandRing"
          className={cn('font-monospace font-bold tracking-wider', className)}
          size="lg">
          {t('buttons.trigger')}
        </Button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Modal
            title={t.rich('title', {
              tag: (chunks) => (
                <span className="text-3xl font-normal uppercase italic md:text-5xl">{chunks}</span>
              ),
            })}
            description={t('description')}>
            <ContactForm onSubmit={handleSubmit} />
          </Dialog.Modal>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
