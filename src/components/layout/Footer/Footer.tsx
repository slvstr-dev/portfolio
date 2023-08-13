import { useLocale } from 'next-intl';

import { ContactSection } from '@/components/layout/ContactSection/ContactSection';
import { Container } from '@/components/layout/Container/Container';
import { UserInfo } from '@/components/network/UserInfo/UserInfo';
import { Copyright } from '@/components/ui/Copyright/Copyright';
import { Logo } from '@/components/ui/Logo/Logo';

export function Footer() {
  const locale = useLocale();

  return (
    <footer>
      <ContactSection />

      <Container gap="md" maxWidth="lg" verticalPadding="lg" isCentered>
        <div className="flex w-full flex-col items-center gap-10 text-center md:flex-row md:gap-20 md:text-left">
          <Logo className="text-9xl text-theme-brand-300" />

          <UserInfo locale={locale} />
        </div>

        <Copyright />
      </Container>
    </footer>
  );
}
