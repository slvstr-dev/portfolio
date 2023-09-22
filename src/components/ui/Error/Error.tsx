import type { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import { Container, type ContainerProps } from '@/components/layout/Container/Container';
import { Link } from '@/components/ui/Link/Link';

export interface ErrorProps extends PropsWithChildren<ContainerProps> {
  className?: string;
  title: string;
  description?: string;
}

export function Error({ className, title, description }: ErrorProps) {
  const t = useTranslations('components.ui.error');

  return (
    <Container className={className} maxWidth="xs" gap="sm" isCentered>
      <h1 className="text-9xl italic text-theme-brand-200">{title}</h1>

      {description && <p className="text-2xl">{description}</p>}

      <Link href="/" color="muted" size="lg">
        {t('buttons.home')}
      </Link>
    </Container>
  );
}
