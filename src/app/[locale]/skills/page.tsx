import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.skills');

  return {
    title: t('title'),
  };
}

export default function SkillsPage() {
  const t = useTranslations('pages.skills');

  return (
    <main className="flex grow flex-col items-center justify-center bg-pink-300 text-white">
      <h1 className="text-center font-handwriting">{t('title')}</h1>
    </main>
  );
}
