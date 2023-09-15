import Image from 'next/image';

import { tv, VariantProps } from 'tailwind-variants';

import { Container } from '@/components/layout/Container/Container';
import { Title } from '@/components/ui/Title/Title';
import { cn } from '@/src/utils/tailwindUtils';

type HeroVariants = VariantProps<typeof hero>;

export interface HeroProps extends HeroVariants {
  children?: string;
  className?: string;
  backgroundImage?: string;
}

export function Hero({ className, children, backgroundImage }: HeroProps) {
  const styles = hero({ hasBackgroundImage: !!backgroundImage });

  return (
    <section className={cn('relative bg-theme-brand-100', className)}>
      {!!backgroundImage && (
        <Image
          className="absolute inset-0 object-cover object-center"
          src={backgroundImage}
          alt=""
          fill
          priority
        />
      )}

      <Container className={styles.base({ className })} isCentered>
        {children && <Title className={styles.title()}>{children}</Title>}
      </Container>
    </section>
  );
}

const hero = tv({
  base: 'relative pb-10 pt-20 md:pb-20 md:pt-40',
  slots: {
    title: 'text-center text-5xl italic tracking-widest md:text-8xl',
  },
  variants: {
    hasBackgroundImage: {
      true: {
        base: 'bg-black/20',
        title: 'font-light uppercase not-italic text-white',
      },
    },
  },
});
