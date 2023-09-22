import { createClient } from './generated';

export const client = createClient({
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN}`,
    version: 'draft',
  },
});
