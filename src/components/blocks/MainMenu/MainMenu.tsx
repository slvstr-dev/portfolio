import { useTranslations } from 'next-intl';

import { NavigationMenu } from '@/components/ui/NavigationMenu/NavigationMenu';
import { cn } from '@/utils/tailwindUtils';

export interface MainMenuProps {
  className?: string;
  isLight?: boolean;
  onChange?: () => void;
}

export function MainMenu({ className, isLight, onChange }: MainMenuProps) {
  const t = useTranslations('components.layout.header');

  return (
    <NavigationMenu>
      <NavigationMenu.List className={cn('flex gap-8', className)}>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/#about" isLight={isLight} onClick={onChange}>
            {t('buttons.about')}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/#projects" isLight={isLight} onClick={onChange}>
            {t('buttons.projects')}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/#experience" isLight={isLight} onClick={onChange}>
            {t('buttons.experience')}
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  );
}
