import { useLocale } from 'next-intl';

import Container from '@/components/layout/Container/Container';
import UserInfo from '@/components/network/UserInfo/UserInfo';
import Copyright from '@/components/ui/Copyright/Copyright';

export default function Footer() {
  const locale = useLocale();

  return (
    <footer>
      <Container gap="md" maxWidth="lg" verticalPadding="lg" isCentered>
        <UserInfo locale={locale} />

        <Copyright />
      </Container>
    </footer>
  );
}
