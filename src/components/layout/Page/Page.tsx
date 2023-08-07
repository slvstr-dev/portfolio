import { PropsWithChildren } from 'react';

import Container from '@/components/layout/Container/Container';
import Hero from '@/components/layout/Hero/Hero';
import Contact from '@/components/ui/Contact/Contact';
import { cn } from '@/src/utils/tailwindUtils';

export interface PageProps extends PropsWithChildren {
  className?: string;
  title?: string;
  backgroundImage?: string;
  hasContactSection?: boolean;
}

export default function Page({
  children,
  className,
  title,
  backgroundImage,
  hasContactSection = true,
}: PageProps) {
  return (
    <>
      {(!!title || !!backgroundImage) && <Hero backgroundImage={backgroundImage}>{title}</Hero>}

      <main className={cn('flex grow flex-col bg-theme-inverted', className)}>{children}</main>

      {hasContactSection && (
        <Container className="bg-theme-brand-100" verticalPadding="lg" maxWidth="xs" isCentered>
          <Contact />
        </Container>
      )}
    </>
  );
}
