'use client';

import { useTransition } from 'react';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';

import Button from '@/components/ui/Button/Button';

export default function LocaleSwitcher() {
  const t = useTranslations('components.localeSwitcher');
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(locale: string) {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <div className="flex gap-4">
      <Button
        disabled={isPending || 'nl' === currentLocale}
        onClick={() => onSelectChange('nl')}
        color="warning"
        padding="md">
        {t('nl')}
      </Button>

      <Button
        disabled={isPending || 'en' === currentLocale}
        onClick={() => onSelectChange('en')}
        color="warning"
        padding="md">
        {t('en')}
      </Button>
    </div>
  );
}
