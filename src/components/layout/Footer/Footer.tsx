import { getTranslator } from 'next-intl/server';

import { Container } from '@/components/layout/Container/Container';
import { Anchor } from '@/components/ui/Anchor/Anchor';
import { Copyright } from '@/components/ui/Copyright/Copyright';
import { Logo } from '@/components/ui/Logo/Logo';
import { client } from '@/graphql/index';

export interface FooterProps {
  locale: string;
}

export async function Footer({ locale }: FooterProps) {
  const t = await getTranslator(locale, 'components.layout.footer');

  const { user } = await client.query({
    user: {
      __args: {
        login: 'slvstr-dev',
      },
      name: true,
      url: true,
      company: true,
      location: true,
      socialAccounts: {
        __args: {
          first: 4,
        },
        nodes: {
          url: true,
          provider: true,
        },
      },
    },
  });

  return (
    <footer>
      <Container
        gap="md"
        maxWidth="lg"
        verticalPadding="lg"
        isCentered
        className="bg-theme-brand-100">
        {!!user && (
          <div className="flex w-full flex-col items-center gap-10 text-center md:flex-row md:gap-20 md:text-left">
            <Logo className="text-9xl text-theme-brand-300" />

            {!!user && (
              <div className="flex flex-col gap-1 text-xl">
                <h2 className="font-bold uppercase">{user.name}</h2>

                <Anchor
                  href={t('company.href')}
                  target="_blank"
                  className="block font-light capitalize">
                  {user.company}
                </Anchor>

                <p className="font-light">{user.location}</p>
              </div>
            )}

            <div className="flex flex-col gap-1 text-xl">
              <h3 className="font-bold uppercase">{t('social_accounts.title')}</h3>

              <Anchor href={user.url} target="_blank" className="block font-light capitalize">
                {t('social_accounts.github.title')}
              </Anchor>

              {user.socialAccounts.nodes?.map((account, idx) => {
                if (!account) return null;

                return (
                  <Anchor
                    key={idx}
                    href={account.url}
                    target="_blank"
                    className="block font-light capitalize">
                    {account.provider.toLowerCase()}
                  </Anchor>
                );
              })}
            </div>
          </div>
        )}

        <Copyright />
      </Container>
    </footer>
  );
}
