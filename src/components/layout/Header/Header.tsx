'use client';

import { useEffect, useState } from 'react';

import { useSelectedLayoutSegment } from 'next/navigation';

import { useTranslations } from 'next-intl';

import Container from '@/components/layout/Container/Container';
import Link from '@/components/ui/Link/Link';
import Logo from '@/components/ui/Logo/Logo';
import NavigationMenu from '@/components/ui/NavigationMenu/NavigationMenu';
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
