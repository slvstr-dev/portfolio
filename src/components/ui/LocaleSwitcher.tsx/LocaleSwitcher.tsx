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

  function handleLocaleSwitch(locale: string) {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <div className="flex gap-4">
      <Button
        isDisabled={isPending || 'nl' === currentLocale}
        onClick={() => handleLocaleSwitch('nl')}>
        {t('nl')}
      </Button>

      <Button
        isDisabled={isPending || 'en' === currentLocale}
        onClick={() => handleLocaleSwitch('en')}>
        {t('en')}
      </Button>
    </div>
  );
}
