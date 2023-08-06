import { getTranslator } from 'next-intl/server';

import { RootLayoutProps } from '@/app/[locale]/layout';
import { Anchor } from '@/components/ui/Anchor/Anchor';
import { Logo } from '@/components/ui/Logo/Logo';
import { getSocialAccounts, getUser } from '@/src/utils/fetchUtils';

export interface UserInfoProps extends Pick<RootLayoutProps['params'], 'locale'> {}

export const UserInfo = async ({ locale }: UserInfoProps) => {
  const t = await getTranslator(locale, 'components.network.user_info');
  const user = await getUser();
  const socialAccounts = await getSocialAccounts();

  return (
    <div className="flex w-full flex-col items-center gap-10 text-center leading-normal md:flex-row md:gap-20 md:text-left">
      <Logo className="text-9xl font-light text-theme-brand-300" />

      {!!user && (
        <div className="self-start text-xl">
          {user?.name && <h2 className="font-bold uppercase">{user.name}</h2>}

          {user?.company && (
            <Anchor
              href={t('company.href')}
              target="_blank"
              className="block font-light capitalize">
              {user.company}
            </Anchor>
          )}

          {user?.location && <p className="font-light">{user.location}</p>}
        </div>
      )}

      {(!!user || !!socialAccounts) && (
        <div className="self-start text-xl">
          <h3 className="font-bold uppercase">{t('social_accounts.title')}</h3>

          {user?.html_url && (
            <Anchor href={user.html_url} target="_blank" className="block font-light capitalize">
              {t('social_accounts.github.title')}
            </Anchor>
          )}

          {socialAccounts?.map((account, idx) => {
            return (
              <Anchor
                key={idx}
                href={account.url}
                target="_blank"
                className="block font-light capitalize">
                {account.provider}
              </Anchor>
            );
          })}
        </div>
      )}
    </div>
  );
};
