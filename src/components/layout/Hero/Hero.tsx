import { PropsWithChildren } from 'react';

import { Container } from '@/components/layout/Container/Container';
import { cn } from '@/src/utils/tailwindUtils';

export interface HeroProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

export const Hero = ({ className, title }: HeroProps) => {
  return (
    <Container className={cn('pb-20 pt-14', className)} isCentered>
      {title && <h1 className="text-5xl italic">{title}</h1>}
    </Container>
  );
};
