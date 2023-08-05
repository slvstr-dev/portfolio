import { useLocale } from 'next-intl';

import { Container } from '@/components/layout/Container/Container';
import { UserInfo } from '@/components/network/UserInfo/UserInfo';
import { Contact } from '@/components/ui/Contact/Contact';
import { Copyright } from '@/components/ui/Copyright/Copyright';

export const Footer = () => {
  const locale = useLocale();

  return (
    <footer>
      <Container className="bg-theme-brand-100" verticalPadding="lg" maxWidth="xs" isCentered>
        <Contact />
      </Container>

      <Container gap="md" maxWidth="lg" verticalPadding="lg" isCentered>
        <UserInfo locale={locale} />

        <Copyright />
      </Container>
    </footer>
  );
};
