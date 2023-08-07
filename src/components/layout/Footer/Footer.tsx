import { useLocale } from 'next-intl';

import Contact from '@/components/layout/Contact/Contact';
import Container from '@/components/layout/Container/Container';
import UserInfo from '@/components/network/UserInfo/UserInfo';
import Copyright from '@/components/ui/Copyright/Copyright';

export default function Footer() {
  const locale = useLocale();

  return (
    <footer>
      <Contact />

      <Container gap="md" maxWidth="lg" verticalPadding="lg" isCentered>
        <UserInfo locale={locale} />

        <Copyright />
      </Container>
    </footer>
  );
}
