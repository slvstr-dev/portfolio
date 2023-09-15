import { useTranslations } from 'next-intl';

import { NavigationMenu } from '@/components/ui/NavigationMenu/NavigationMenu';
import { cn } from '@/src/utils/tailwindUtils';

export interface MainMenuProps {
  className?: string;
  isLight?: boolean;
}

export function MainMenu({ className, isLight }: MainMenuProps) {
  const t = useTranslations('components.layout.header');

  return (
    <NavigationMenu>
      <NavigationMenu.List className={cn('flex gap-8', className)}>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/projects" isLight={isLight}>
            {t('buttons.projects')}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/experience" isLight={isLight}>
            {t('buttons.experience')}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/skills" isLight={isLight}>
            {t('buttons.skills')}
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  );
}
