import { getTranslator } from 'next-intl/server';

import { RootLayoutProps } from '@/app/[locale]/layout';
import { Card } from '@/components/ui/Card/Card';
import { Link } from '@/components/ui/Link/Link';
import { Slider } from '@/components/ui/Slider/Slider';
import { client } from '@/src/graphql';

export interface PinnedItemsProps extends Pick<RootLayoutProps['params'], 'locale'> {}

export async function PinnedItems({ locale }: PinnedItemsProps) {
  const t = await getTranslator(locale, 'components.network.pinned_items');

  const { user } = await client.query({
    user: {
      __args: {
        login: 'slvstr-dev',
      },
      name: true,
      pinnedItems: {
        __args: {
          first: 6,
        },
        nodes: {
          on_Repository: {
            __typename: true,
            id: true,
            name: true,
            description: true,
            url: true,
            homepageUrl: true,
            resourcePath: true,
          },
        },
      },
    },
  });

  if (!user) return null;

  return (
    <Slider>
      {user.pinnedItems.nodes?.map((respository) => {
        if (!respository || respository.__typename !== 'Repository') return null;

        console.log(
          `https://raw.githubusercontent.com${respository.resourcePath}master/screenshot.png`,
        );
        return (
          <Card
            key={respository.id}
            src={`https://raw.githubusercontent.com${respository.resourcePath}/master/screenshot.png`}>
            <h3 className="text-4xl uppercase italic">{respository.name}</h3>

            <p className="mt-2">{respository.description}</p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              {!!respository.url && (
                <Link href={respository.url} color="mutedRing" size="lg" target="_blank">
                  {t('buttons.github')}
                </Link>
              )}

              {!!respository.homepageUrl && (
                <Link href={respository.homepageUrl} color="mutedRing" size="lg" target="_blank">
                  {t('buttons.website')}
                </Link>
              )}
            </div>
          </Card>
        );
      })}
    </Slider>
  );
}
