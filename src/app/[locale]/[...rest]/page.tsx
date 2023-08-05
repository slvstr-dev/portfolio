import { useTranslations } from 'next-intl';

import { Error } from '@/components/ui/Error/Error';

export default function CatchAllPage() {
  const t = useTranslations('pages.not_found');

  return (
    <main className="flex grow items-center justify-center bg-theme-brand-100 text-center">
      <Error title={t('title')} description={t('description')} />
    </main>
  );
}
