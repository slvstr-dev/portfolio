import 'server-only';

export async function getGitHubData(endpoint: string) {
  try {
    const res = await fetch(`https://api.github.com/${endpoint}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  } catch (e) {
    console.error(endpoint, e);
  }
}
