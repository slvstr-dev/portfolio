import { useTranslations } from 'next-intl';

import { ContactForm } from '@/components/forms/ContactForm/ContactForm';
import { Container } from '@/components/layout/Container/Container';

export function ContactSection() {
  const t = useTranslations('components.ui.contact');

  return (
    <Container
      className="bg-theme-brand-100"
      verticalPadding="lg"
      gap="xs"
      maxWidth="xs"
      isCentered>
      <h2 className="text-center text-2xl lowercase italic md:text-3xl">
        {t.rich('title', {
          tag: (chunks) => (
            <span className="text-3xl font-normal uppercase md:text-5xl">{chunks}</span>
          ),
        })}
      </h2>

      <p className="text-center text-2xl lowercase italic">{t('subtitle')}</p>

      <ContactForm className="mt-4 w-full" />
    </Container>
  );
}
