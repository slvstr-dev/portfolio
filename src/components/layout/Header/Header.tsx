import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import Section from '@/components/layout/Container/Container';
import Button from '@/components/ui/Button/Button';
import Logo from '@/components/ui/Logo/Logo';
import Menu from '@/components/ui/Menu/Menu';

export interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const t = useTranslations('components.header');

  return (
    <header className={twMerge('bg-pink-100', className)}>
      <Section as="div" className="text-pink-300" direction="row">
        <Logo />

        <Menu className="grow" />

        <Button href="#contact" color="pink">
          {t('buttons.contact')}
        </Button>
      </Section>
    </header>
  );
}
