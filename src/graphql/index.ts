import { createClient } from './generated';

export const client = createClient({
  headers: {
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});
