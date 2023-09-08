import { createClient } from './generated';

export const client = createClient({
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
  },
});
