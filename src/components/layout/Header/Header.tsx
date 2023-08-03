import ContactDialog from '@/components/dialogs/ContactDialog';
import Section from '@/components/layout/Container/Container';
import Logo from '@/components/ui/Logo/Logo';
import Menu from '@/components/ui/Menu/Menu';
import { cn } from '@/src/utils/tailwindUtils';

export interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn('bg-theme-brand-100', className)}>
      <Section as="div" className="text-theme-brand-300" direction="row">
        <Logo />

        <Menu className="grow" />

        <ContactDialog />
      </Section>
    </header>
  );
}
