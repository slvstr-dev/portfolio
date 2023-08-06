import { Octokit, RequestError } from 'octokit';

import 'server-only';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

function handleError(error: unknown) {
  if (error instanceof RequestError) {
    return console.error(`GET /user - ${error.status}: ${error.message}`);
  }

  return console.error(`GET /user: ${error}`);
}

export async function getUser() {
  try {
    const { data } = await octokit.request('GET /user');

    return data;
  } catch (error) {
    return handleError(error);
  }
}

export async function getSocialAccounts() {
  try {
    const { data } = await octokit.request('GET /user/social_accounts');

    return data;
  } catch (error) {
    return handleError(error);
  }
}
