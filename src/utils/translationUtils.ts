import { notFound } from 'next/navigation';

export async function getTranslations(locale: string) {
  try {
    return (await import(`../translations/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}
