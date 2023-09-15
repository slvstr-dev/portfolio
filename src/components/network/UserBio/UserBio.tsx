import { Quote } from '@/components/ui/Quote/Quote';
import { client } from '@/src/graphql';

export interface UserBioProps {
  className?: string;
}

export async function UserBio(props: UserBioProps) {
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
    <Quote icon="Commit" {...props}>
      {user.bio}
    </Quote>
  );
}
