import { Container } from '@/components/layout/Container/Container';
import { cn } from '@/src/utils/tailwindUtils';

export interface HeroProps {
  children?: string;
  className?: string;
}

export const Hero = ({ className, children }: HeroProps) => {
  return (
    <Container className={cn('pb-20 pt-14', className)} isCentered>
      {children && <h1 className="text-5xl italic">{children}</h1>}
    </Container>
  );
};
