import { FeaturedText } from '@/components/ui/FeaturedText/FeaturedText';
import { client } from '@/graphql/index';

export interface QuoteProps {
  className?: string;
}

export async function Quote(props: QuoteProps) {
  const { user } = await client.query({
    user: {
      __args: {
        login: 'slvstr-dev',
      },
      bio: true,
    },
  });

  if (!user) return null;

  return (
    <FeaturedText icon="Commit" {...props}>
      {user.bio}
    </FeaturedText>
  );
}
