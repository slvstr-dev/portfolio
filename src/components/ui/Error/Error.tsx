import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';

import { Container, ContainerProps } from '@/components/layout/Container/Container';
import { Button } from '@/components/ui/Button/Button';

export interface ErrorProps extends PropsWithChildren<ContainerProps> {
  className?: string;
  title: string;
  description?: string;
}

export const Error = ({ className, title, description, ...props }: ErrorProps) => {
  const t = useTranslations('components.ui.error');

  return (
    <Container {...props} maxWidth="xs" isCentered>
      <h1 className="text-9xl italic text-theme-brand-200">{title}</h1>

      {description && <p className="text-2xl">{description}</p>}

      <Button href="/" className="bg-white">
        {t('buttons.home')}
      </Button>
    </Container>
  );
};
