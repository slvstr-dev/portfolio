import { tv, type VariantProps } from 'tailwind-variants';

import { Container } from '@/components/layout/Container/Container';
import { IconsWrapper } from '@/components/ui/IconsWrapper/IconsWrapper';
import { Image, type ImageProps } from '@/components/ui/Image/Image';
import { Title } from '@/components/ui/Title/Title';
import { cn } from '@/utils/tailwindUtils';

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
      {!!src && (
        <Image className="absolute inset-0" src={src} alt={alt} sizes="100vw" fill priority />
      )}

      <Container className={styles.base({ className })} isCentered maxWidth="md">
        {children && (
          <IconsWrapper icons={['HTML', 'JS', 'CSS', 'Terminal']} color="brand">
            <Title as="h1" className={styles.title()}>
              {children}
            </Title>
          </IconsWrapper>
        )}
      </Container>
    </section>
  );
}

const hero = tv({
  slots: {
    base: 'relative',
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
