import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="flex grow flex-col items-center justify-center bg-gray-100">
      <h1 className="text-center">{t('pages.home.title', { name: 'Next.js' })}</h1>
    </main>
  );
}
