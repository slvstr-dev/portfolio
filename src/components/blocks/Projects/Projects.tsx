import { useLocale, useTranslations } from 'next-intl';

import { Anchor } from '@/components/ui/Anchor/Anchor';
import { Title } from '@/components/ui/Title/Title';

import { UserPinnedItems } from './internal/UserPinnedItems';

export interface ProjectsProps {
  className?: string;
}

export function Projects({ className }: ProjectsProps) {
  const t = useTranslations('components.blocks.projects');
  const locale = useLocale();

  return (
    <article className={className}>
      <Title>
        {t.rich('title', {
          tag: (chunks) => <span className="italic">{chunks}</span>,
        })}
      </Title>

      <p className="text-center">
        {t.rich('description', {
          tag: (chunks) => <Anchor href={process.env.NEXT_PUBLIC_GITHUB_PROFILE}>{chunks}</Anchor>,
        })}
      </p>

      <UserPinnedItems className="pt-10" locale={locale} />
    </article>
  );
}
