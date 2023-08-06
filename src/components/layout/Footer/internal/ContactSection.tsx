'use client';

import { Container } from '@/components/layout/Container/Container';
import { Contact } from '@/components/ui/Contact/Contact';
import { useIsActiveRoute } from '@/hooks/useIsActiveRoute';

export const ContactSection = () => {
  const isActiveRoute = useIsActiveRoute('/contact');

  if (isActiveRoute) return <></>;

  return (
    <Container className="bg-theme-brand-100" verticalPadding="lg" maxWidth="xs" isCentered>
      <Contact />
    </Container>
  );
};
