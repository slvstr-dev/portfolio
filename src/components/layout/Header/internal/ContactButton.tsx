'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/components/ui/Link/Link';
import { useIsActiveRoute } from '@/hooks/useIsActiveRoute';

export const ContactButton = () => {
  const t = useTranslations('components.layout.header');
  const isActiveRoute = useIsActiveRoute('/contact');

  if (isActiveRoute) return <></>;

  return (
    <Link
      href="/contact"
      color="brandRing"
      className="font-monospace font-bold tracking-wider"
      size="lg"
      aria-controls="radix-:R1mcq:">
      {t('contact_form.title')}
    </Link>
  );
};
