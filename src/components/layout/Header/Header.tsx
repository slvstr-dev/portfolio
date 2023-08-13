'use client';

import { useCallback, useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import { ContactModal } from '@/components/dialogs/ContactModal/ContactModal';
import { Container } from '@/components/layout/Container/Container';
import { Logo } from '@/components/ui/Logo/Logo';
import { NavigationMenu } from '@/components/ui/NavigationMenu/NavigationMenu';
import { cn } from '@/src/utils/tailwindUtils';

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const t = useTranslations('components.layout.header');
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
      direction="row">
      <Logo />

      <NavigationMenu className="grow">
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/projects">{t('buttons.projects')}</NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link href="/experience">{t('buttons.experience')}</NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link href="/skills">{t('buttons.skills')}</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu>

      <ContactModal />
    </Container>
  );
}
