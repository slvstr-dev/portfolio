'use client';

import { useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';

import ContactForm from '@/components/forms/ContactForm';
import Dialog from '@/components/layout/Dialog/Dialog';

// TODO [2023-08-01]: Remove aria-controls when Next.js bug is fixed in 13.4.13
export default function ContactModal() {
  const t = useTranslations('pages.modal.contact');
  const router = useRouter();

  const handleOnOpenChange = () => {
    router.back();
  };

  return (
    <Dialog open={true} onOpenChange={handleOnOpenChange}>
      <Dialog.Content
        title={t.rich('title', {
          tag: (chunks) => <span className="text-5xl font-normal uppercase italic">{chunks}</span>,
        })}
        description={t('description')}>
        <ContactForm onSubmit={handleOnOpenChange} />
      </Dialog.Content>
    </Dialog>
  );
}
