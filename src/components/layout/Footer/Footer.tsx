import { useLocale } from 'next-intl';

import { ContactSection } from '@/components/layout/ContactSection/ContactSection';
import { Container } from '@/components/layout/Container/Container';
import { UserInfo } from '@/components/network/UserInfo/UserInfo';
import { Copyright } from '@/components/ui/Copyright/Copyright';

export function Footer() {
  const locale = useLocale();

  return (
    <footer>
      <ContactSection />

      <Container gap="md" maxWidth="lg" verticalPadding="lg" isCentered>
        <UserInfo locale={locale} />

        <Copyright />
      </Container>
    </footer>
  );
}
