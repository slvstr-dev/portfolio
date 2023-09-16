import { getRequestConfig } from 'next-intl/server';

import { getTranslations } from './utils/translationUtils';

export default getRequestConfig(async ({ locale }) => {
  const messages = await getTranslations(locale);

  return {
    messages,
  };
});
