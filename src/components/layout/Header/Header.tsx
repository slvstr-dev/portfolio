import Image from 'next/image';

import { ContactDialog } from '@/components/dialogs/ContactDialog';
import { Container } from '@/components/layout/Container/Container';
import { Hero } from '@/components/layout/Hero/Hero';
import { MainNavigation } from '@/components/navigation/MainNavigation/MainNavigation';
import { Logo } from '@/components/ui/Logo/Logo';
import { cn } from '@/src/utils/tailwindUtils';

export interface HeaderProps {
  className?: string;
  title?: string;
  backgroundImage?: string;
}

export const Header = ({ className, title, backgroundImage }: HeaderProps) => {
  return (
    <header className={cn('bg-theme-brand-100', className)}>
      {!!backgroundImage && <Image src={backgroundImage} alt="" fill />}

      <Container
        as="div"
        verticalPadding="sm"
        gap="sm"
        className="text-theme-brand-300"
        direction="row">
        <Logo />

        <MainNavigation />

        <ContactDialog />
      </Container>

      {title && (
        <Hero className={cn('bg-theme-brand-100', { 'text-white': !!backgroundImage })}>
          {title}
        </Hero>
      )}
    </header>
  );
};
