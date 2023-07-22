import { useTranslations } from 'next-intl';

export default function SkillsPage() {
  const t = useTranslations('pages.skills');

  return (
    <main className="flex grow flex-col items-center justify-center bg-gray-100">
      <h1 className="text-center">{t('title')}</h1>
    </main>
  );
}
