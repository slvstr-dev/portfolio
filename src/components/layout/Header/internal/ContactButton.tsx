'use client';

import { useTranslations } from 'next-intl';

import Link from '@/components/ui/Link/Link';
import { useIsActiveRoute } from '@/hooks/useIsActiveRoute';

export default function ContactButton() {
  const t = useTranslations('components.layout.header');
  const isActiveRoute = useIsActiveRoute('/contact');

  return (
    <Link
      isDisabled={isActiveRoute}
      href="/contact"
      color="brandRing"
      className="font-monospace font-bold tracking-wider"
      size="lg">
      {t('buttons.contact')}
    </Link>
  );
}
