'use client';

import { PropsWithChildren, useTransition } from 'react';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';

import Button, { ButtonProps } from '@/components/ui/Button/Button';

interface LocaleSwitcherProps extends PropsWithChildren<ButtonProps> {
  locale: string;
}

export default function LocaleSwitcher({ locale, children, ...props }: LocaleSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange() {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <Button
      disabled={isPending || locale === currentLocale}
      onClick={onSelectChange}
      color="primary"
      padding="md"
      {...props}>
      {children}
    </Button>
  );
}
