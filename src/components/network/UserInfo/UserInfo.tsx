import { getTranslator } from 'next-intl/server';

import { RootLayoutProps } from '@/app/[locale]/layout';
import { Anchor } from '@/components/ui/Anchor/Anchor';
import { Logo } from '@/components/ui/Logo/Logo';
import { getGitHubData } from '@/src/utils/fetchUtils';

export interface UserInfoProps extends Pick<RootLayoutProps['params'], 'locale'> {}

export const UserInfo = async ({ locale }: UserInfoProps) => {
  const t = await getTranslator(locale, 'components.network.user_info');
  const userData: any = await getGitHubData('user');
  const socialAccountsData: any = await getGitHubData('user/social_accounts');

  return (
    <div className="flex w-full flex-col items-center gap-10 text-center text-2xl leading-normal md:flex-row md:gap-20 md:text-left">
      <Logo className="text-9xl font-light text-theme-brand-300" />

      {(userData?.name || userData?.company || userData?.location) && (
        <div className="self-start">
          {userData?.name && <h2 className="font-bold uppercase">{userData.name}</h2>}

          {userData?.company && <p className="font-light">{userData.company}</p>}

          {userData?.location && <p className="font-light">{userData.location}</p>}
        </div>
      )}

      {(userData?.html_url || socialAccountsData?.length > 0) && (
        <div className="self-start">
          <h3 className="font-bold uppercase">{t('social_accounts.title')}</h3>

          {socialAccountsData?.map((account: { provider: string; url: string }, idx: string) => {
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
