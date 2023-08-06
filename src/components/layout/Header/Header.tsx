import Image from 'next/image';

import { Container } from '@/components/layout/Container/Container';
import { Hero } from '@/components/layout/Hero/Hero';
import { MainNavigation } from '@/components/navigation/MainNavigation/MainNavigation';
import { Logo } from '@/components/ui/Logo/Logo';
import { cn } from '@/src/utils/tailwindUtils';

import { ContactButton } from './internal/ContactButton';

export interface HeaderProps {
  className?: string;
  title?: string;
  backgroundImage?: string;
}

export const Header = ({ className, title, backgroundImage }: HeaderProps) => {
  return (
    <header className={cn('relative bg-theme-brand-100', className)}>
      {!!backgroundImage && (
        <Image
          className="absolute inset-0 object-cover object-center"
          src={backgroundImage}
          alt=""
          fill
          priority
        />
      )}

      <Container
        as="div"
        verticalPadding="sm"
        gap="sm"
        className="relative text-theme-brand-300"
        direction="row">
        <Logo />

        <MainNavigation />

        <ContactButton />
      </Container>

      {title && (
        <Hero className="relative" isWhite={!!backgroundImage}>
          {title}
        </Hero>
      )}
    </header>
  );
};
