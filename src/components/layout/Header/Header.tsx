'use client';

import { useEffect, useState } from 'react';

import { useSelectedLayoutSegment } from 'next/navigation';

import { useTranslations } from 'next-intl';

import Container from '@/components/layout/Container/Container';
import MainNavigation from '@/components/navigation/MainNavigation/MainNavigation';
import Link from '@/components/ui/Link/Link';
import Logo from '@/components/ui/Logo/Logo';
import { cn } from '@/src/utils/tailwindUtils';

export default function Header() {
  const t = useTranslations('components.layout.header');
  const [hasBackground, setBackground] = useState(false);
  const segment = useSelectedLayoutSegment();

  const listenScrollEvent = () => {
    setBackground(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <Container
      as="header"
      verticalPadding="sm"
      gap="sm"
      className={cn('fixed inset-x-0 top-0 z-10 text-theme-brand-300 transition-colors', {
        'bg-theme-brand-100': hasBackground,
      })}
      direction="row">
      <Logo />

      <MainNavigation />

      {segment !== 'contact' && (
        <Link
          href="/contact"
          color="brandRing"
          className="font-monospace font-bold tracking-wider"
          size="lg">
          {t('buttons.contact')}
        </Link>
      )}
    </Container>
  );
}
