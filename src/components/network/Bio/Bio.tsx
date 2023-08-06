import { Quote } from '@/components/ui/Quote/Quote';
import { getUser } from '@/src/utils/fetchUtils';

export const Bio = async () => {
  const user = await getUser();

  if (!user?.bio) return <></>;

  return <Quote icon="Commit">{user.bio}</Quote>;
};
