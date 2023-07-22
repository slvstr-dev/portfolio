'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';

export default function Menu() {
  const t = useTranslations('components.menu');
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-4">
        <li
          className={`${
            pathname.startsWith('/experience')
              ? 'pointer-events-none opacity-50'
              : 'transition-opacity hover:opacity-50'
          }`}>
          <Link href={{ pathname: '/experience' }}>{t('experience')}</Link>
        </li>

        <li
          className={`${
            pathname.startsWith('/skills')
              ? 'pointer-events-none opacity-50'
              : 'transition-opacity hover:opacity-50'
          }`}>
          <Link href={{ pathname: '/skills' }}>{t('skills')}</Link>
        </li>
      </ul>
    </nav>
  );
}
