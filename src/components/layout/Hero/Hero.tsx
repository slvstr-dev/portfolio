import { tv, VariantProps } from 'tailwind-variants';

import { Container } from '@/components/layout/Container/Container';
import { Image, ImageProps } from '@/components/ui/Image/Image';
import { Title } from '@/components/ui/Title/Title';
import { cn } from '@/src/utils/tailwindUtils';

type HeroVariants = VariantProps<typeof hero>;

export interface HeroProps extends HeroVariants {
  children?: string;
  className?: string;
  alt?: ImageProps['alt'];
  src?: ImageProps['src'];
}

export function Hero({ className, children, src, alt }: HeroProps) {
  const styles = hero({ hasOverlay: !!src });

  return (
    <section className={cn('relative bg-theme-brand-100', className)}>
      {!!src && <Image className="absolute inset-0" src={src} alt={alt} fill priority />}

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
    hasOverlay: {
      true: {
        base: 'bg-black/20',
        title: 'font-light uppercase not-italic text-white',
      },
    },
  },
});
