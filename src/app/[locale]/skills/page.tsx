import { useTranslations } from 'next-intl';

export default function SkillsPage() {
  const t = useTranslations('pages.skills');

  return (
    <main className="bg-gray-100 flex grow flex-col items-center justify-center">
      <h1 className="text-center">{t('title')}</h1>
    </main>
  );
}
