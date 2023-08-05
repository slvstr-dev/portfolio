'use client';

import { useTranslations } from 'next-intl';

import { NavigationMenu } from '@/components/ui/NavigationMenu/NavigationMenu';

export const MainNavigation = () => {
  const t = useTranslations('components.navigation.main_navigation');

  return (
    <NavigationMenu className="grow">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/projects">{t('projects')}</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/experience">{t('experience')}</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/skills">{t('skills')}</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  );
};
