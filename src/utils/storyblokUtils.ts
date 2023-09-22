import { getStoryblokApi, type ISbStoriesParams } from '@storyblok/react/rsc';

export async function getStorybookPreviewData(id: string, params?: ISbStoriesParams) {
  const storyblokApi = getStoryblokApi();

  return storyblokApi.get(`cdn/stories/${id}`, { version: 'draft', ...params });
}
