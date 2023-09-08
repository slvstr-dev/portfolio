import { getTranslator } from 'next-intl/server';

import { RootLayoutProps } from '@/app/[locale]/layout';
import { Anchor } from '@/components/ui/Anchor/Anchor';
import { client } from '@/src/graphql';

export interface UserInfoProps extends Pick<RootLayoutProps['params'], 'locale'> {}

export async function UserInfo({ locale }: UserInfoProps) {
  const t = await getTranslator(locale, 'components.network.user_info');

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

  if (!user) return null;

  return (
    <>
      {!!user && (
        <div className="flex flex-col gap-1 text-xl">
          <h2 className="font-bold uppercase">{user.name}</h2>

          <Anchor href={t('company.href')} target="_blank" className="block font-light capitalize">
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
    </>
  );
}
