'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

import { useTranslations } from 'next-intl';

import ContactForm from '@/components/forms/ContactForm';
import Container from '@/components/layout/Container/Container';

export default function Contact() {
  const t = useTranslations('components.ui.contact');
  const segment = useSelectedLayoutSegment();

  if (segment === 'contact') return <></>;

  return (
    <Container
      className="bg-theme-brand-100"
      verticalPadding="lg"
      gap="xs"
      maxWidth="xs"
      isCentered>
      <h2 className="text-center text-4xl lowercase italic">
        {t.rich('title', {
          tag: (chunks) => <span className="text-5xl font-normal uppercase">{chunks}</span>,
        })}
      </h2>

      <h3 className="text-center text-3xl lowercase italic">{t('subtitle')}</h3>

      <ContactForm className="mt-6" />
    </Container>
  );
}
