import { HTMLAttributes } from 'react';

import Image, { ImageProps } from 'next/image';

import { tv, VariantProps } from 'tailwind-variants';

import { AspectRatio } from '@/components/ui/AspectRatio/AspectRatio';
import { cn } from '@/src/utils/tailwindUtils';

type CardVariants = VariantProps<typeof card>;

export interface CardProps extends HTMLAttributes<HTMLElement>, CardVariants {
  imageSrc: ImageProps['src'];
  imageAlt?: ImageProps['alt'];
}

export function Card({
  className,
  orientation,
  isReverse,
  imageSrc,
  imageAlt,
  children,
}: CardProps) {
  const styles = card({ className, orientation, isReverse });

  return (
    <article className={styles.base()}>
      {imageSrc && (
        <AspectRatio ratio={16 / 9}>
          <Image className={styles.image()} src={imageSrc} alt={imageAlt || ''} fill />

          {orientation === 'column' && (
            <div
              className={cn('absolute top-10 h-0.5 w-20 bg-theme-brand-100', {
                '-right-10': !isReverse,
                '-left-10': isReverse,
              })}
            />
          )}
        </AspectRatio>
      )}

      <div className={styles.content()}>{children}</div>
    </article>
  );
}

const card = tv({
  base: 'grid items-center gap-10',
  slots: {
    content: '',
    image: 'object-cover object-center',
  },
  variants: {
    orientation: {
      row: 'grid-flow-row',
      column: 'grid-flow-col grid-cols-2',
    },
    isReverse: {
      true: {
        content: '-order-1',
      },
    },
  },
  defaultVariants: {
    orientation: 'row',
  },
});
