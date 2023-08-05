import { Quote } from '@/components/ui/Quote/Quote';
import { getGitHubData } from '@/src/utils/fetchUtils';

export const Bio = async () => {
  const userData: any = await getGitHubData('user');

  return <Quote icon="Commit">{userData?.bio}</Quote>;
};
