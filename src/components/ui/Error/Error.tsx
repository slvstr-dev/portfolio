import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import { Container, ContainerProps } from '@/components/layout/Container/Container';
import { Link } from '@/components/ui/Link/Link';

export interface ErrorProps extends PropsWithChildren<ContainerProps> {
  className?: string;
  title: string;
  description?: string;
}

export function Error({ className, title, description, ...props }: ErrorProps) {
  const t = useTranslations('components.ui.error');

  return (
    <Container {...props} maxWidth="xs" isCentered>
      <h1 className="text-9xl font-black text-theme-brand-200">{title}</h1>

      {description && <p className="text-2xl">{description}</p>}

      <Link href="/" color="muted">
        {t('buttons.home')}
      </Link>
    </Container>
  );
}
