'use client';

import { Error as ErrorComponent } from '@/components/ui/Error/Error';
import { useTranslations } from 'next-intl';

export default function Error() {
  const t = useTranslations('pages.not_found');

  return (
    <main className="flex grow items-center justify-center bg-theme-brand-100 text-center">
      <ErrorComponent title={t('title')} description={t('description')} />
    </main>
  );
}
