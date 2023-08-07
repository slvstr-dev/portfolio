import Quote from '@/components/ui/Quote/Quote';
import { getUser } from '@/src/utils/fetchUtils';

export default async function Bio() {
  const user = await getUser();

  if (!user?.bio) return <></>;

  return <Quote icon="Commit">{user.bio}</Quote>;
}
