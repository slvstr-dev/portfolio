import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import Menu from '@/components/layout/Menu/Menu';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher.tsx/LocaleSwitcher';

export default function Header() {
  const t = useTranslations('components.header');

  return (
    <header className="flex flex-col items-center gap-4 p-4 text-center">
      <h1 className="text-red-600 text-3xl font-bold transition-opacity hover:opacity-50">
        {t.rich('title', {
          link: (chunks) => <Link href={{ pathname: '/' }}>{chunks}</Link>,
        })}
      </h1>

      <Menu />

      <LocaleSwitcher />
    </header>
  );
}
