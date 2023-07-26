import { useTranslations } from 'next-intl';

export default function ExperiencePage() {
  const t = useTranslations('pages.experience');

  return (
    <main className="flex grow flex-col items-center justify-center bg-pink-300 text-white">
      <h1 className="text-center font-handwriting">{t('title')}</h1>
    </main>
  );
}
