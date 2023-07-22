import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/ui/LocaleSwitcher.tsx/LocaleSwitcher';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <p>{t('pages.home.title', { name: 'Next.js' })}</p>

      <LocaleSwitcher locale="en-GB">{t('global.locales.en-GB')}</LocaleSwitcher>

      <LocaleSwitcher locale="nl-NL">{t('global.locales.nl-NL')}</LocaleSwitcher>
    </main>
  );
}
