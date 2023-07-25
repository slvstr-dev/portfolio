import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="bg-gray-100 flex grow flex-col items-center justify-center">
      <h1 className="text-center font-handwriting">{t('pages.home.title', { name: 'Next.js' })}</h1>
    </main>
  );
}
