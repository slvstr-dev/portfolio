'use client';

import { useCallback, useEffect, useState } from 'react';

import { ContactModal } from '@/components/dialogs/ContactModal/ContactModal';
import { MenuSidebar } from '@/components/dialogs/MenuSidebar/MenuSidebar';
import { Container } from '@/components/layout/Container/Container';
import { MainMenu } from '@/components/navigation/MainMenu/MainMenu';
import { Logo } from '@/components/ui/Logo/Logo';
import { cn } from '@/src/utils/tailwindUtils';

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = useCallback(() => {
    setIsScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, [listenScrollEvent]);

  return (
    <Container
      as="header"
      verticalPadding="sm"
      gap="sm"
      className={cn(
        'fixed inset-x-0 top-0 z-10 text-theme-brand-300 transition-colors',
        className,
        {
          'bg-theme-brand-100 text-theme-brand-300': isScrolled,
        },
      )}
      orientation="row">
      <Logo />

      <div className="hidden grow md:flex md:items-center md:justify-between">
        <MainMenu />

        <ContactModal />
      </div>

      <MenuSidebar className="ml-auto md:hidden" />
    </Container>
  );
}
