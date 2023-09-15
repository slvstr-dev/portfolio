import { useTranslations } from 'next-intl';

import { Document } from '@/components/ui/Document/Document';
import { Title } from '@/components/ui/Title/Title';

import { UserAvatar } from './internal/UserAvatar';

export interface AboutProps {
  className?: string;
}

export function About({ className }: AboutProps) {
  const t = useTranslations('components.blocks.about');

  return (
    <article className={className}>
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-20">
        <UserAvatar className="shrink-0" />

        <Document>
          <Title className="text-4xl uppercase">{t('title')}</Title>

          <h3 className="font-monospace text-lg font-normal uppercase leading-loose tracking-widest text-theme-brand-300">
            {t('subtitle')}
          </h3>

          <p className="font-monospace text-sm leading-loose">{t('description')}</p>
        </Document>
      </div>
    </article>
  );
}
