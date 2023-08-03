import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import Anchor from '@/components/ui/Anchor/Anchor';
import { cn } from '@/src/utils/tailwindUtils';

export interface MenuProps extends PropsWithChildren {
  className?: string;
}

export default function Menu({ className }: MenuProps) {
  const t = useTranslations('components.menu');

  return (
    <nav className={cn('', className)}>
      <ul className="flex gap-4">
        <li>
          <Anchor className="font-monospace" href="/projects">
            {t('projects')}
          </Anchor>
        </li>

        <li>
          <Anchor className="font-monospace" href="/experience">
            {t('experience')}
          </Anchor>
        </li>

        <li>
          <Anchor className="font-monospace" href="/skills">
            {t('skills')}
          </Anchor>
        </li>
      </ul>
    </nav>
  );
}
