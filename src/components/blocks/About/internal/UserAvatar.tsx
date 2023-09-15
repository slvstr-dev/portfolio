import { Avatar } from '@/components/ui/Avatar/Avatar';
import { client } from '@/src/graphql';

export interface UserAvatarProps {
  className?: string;
}

export async function UserAvatar({ className }: UserAvatarProps) {
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

  if (!user) return;

  return (
    <Avatar
      className={className}
      src={user.avatarUrl}
      name={user.name ?? ''}
      company={user.company ?? ''}
    />
  );
}
