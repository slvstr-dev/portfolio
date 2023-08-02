import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import Anchor from '@/components/ui/Anchor/Anchor';

export interface MenuProps extends PropsWithChildren {
  className?: string;
}

export default function Menu({ className }: MenuProps) {
  const t = useTranslations('components.menu');

  return (
    <nav className={twMerge('', className)}>
      <ul className="flex gap-4">
        <li>
          <Anchor href="/projects">{t('projects')}</Anchor>
        </li>

        <li>
          <Anchor href="/experience">{t('experience')}</Anchor>
        </li>

        <li>
          <Anchor href="/skills">{t('skills')}</Anchor>
        </li>
      </ul>
    </nav>
  );
}
