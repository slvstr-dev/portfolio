import { tv, VariantProps } from 'tailwind-variants';

import { Container } from '@/components/layout/Container/Container';
import { cn } from '@/src/utils/tailwindUtils';

type HeroVariants = VariantProps<typeof hero>;

export interface HeroProps extends HeroVariants {
  children?: string;
  className?: string;
}

export const Hero = ({ className, children, isInverted }: HeroProps) => {
  const styles = hero({ isInverted });
  return (
    <Container className={cn(styles.base(), className)} isCentered>
      {children && <h1 className={styles.title()}>{children}</h1>}
    </Container>
  );
};

const hero = tv({
  base: 'pb-20 pt-14',
  slots: {
    title: 'text-center text-8xl italic',
  },
  variants: {
    isInverted: {
      true: {
        title: 'font-light not-italic text-white',
      },
    },
  },
});
