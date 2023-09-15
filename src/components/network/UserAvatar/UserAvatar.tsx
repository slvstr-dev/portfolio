import { Avatar } from '@/components/ui/Avatar/Avatar';
import { client } from '@/src/graphql';

export interface UserAvatarProps {
  className?: string;
}

export async function UserAvatar(props: UserAvatarProps) {
  const { user } = await client.query({
    user: {
      __args: {
        login: 'slvstr-dev',
      },
      name: true,
      company: true,
      avatarUrl: true,
    },
  });

  if (!user) return null;

  return (
    <Avatar src={user.avatarUrl} name={user.name ?? ''} company={user.company ?? ''} {...props} />
  );
}
