import { notFound } from 'next/navigation';

export async function getTranslations(locale: string) {
  try {
    const translations = await import(`../translations/${locale}`);

    return translations.default;
  } catch (error) {
    notFound();
  }
}
