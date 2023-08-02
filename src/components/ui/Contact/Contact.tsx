import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

export interface ContactProps extends PropsWithChildren {
  className?: string;
}

export default function Contact({ className }: ContactProps) {
  const t = useTranslations('components.contact');

  return (
    <section className={twMerge('bg-pink-100', className)}>
      <div className="container flex flex-col items-center py-10">
        <h2 className="font-handwriting text-2xl italic">{t('title')}</h2>
      </div>
    </section>
  );
}
