import { Quote } from '@/components/ui/Quote/Quote';
import { client } from '@/src/graphql';

export async function Bio() {
  const { user } = await client.query({
    user: {
      __args: {
        login: 'slvstr-dev',
      },
      bio: true,
    },
  });

  if (!user) return null;

  return <Quote icon="Commit">{user.bio}</Quote>;
}
