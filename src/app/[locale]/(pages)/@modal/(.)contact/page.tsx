'use client';

import { useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';

import ContactForm from '@/components/forms/ContactForm';
import Dialog from '@/components/layout/Dialog/Dialog';

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
