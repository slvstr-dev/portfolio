'use client';

import { useEffect, useState } from 'react';

import Container from '@/components/layout/Container/Container';
import MainNavigation from '@/components/navigation/MainNavigation/MainNavigation';
import Logo from '@/components/ui/Logo/Logo';
import { cn } from '@/src/utils/tailwindUtils';

import ContactButton from './internal/ContactButton';

export default function Header() {
  const [hasBackground, setBackground] = useState(false);

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

      <ContactButton />
    </Container>
  );
}
