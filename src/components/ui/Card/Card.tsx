import { HTMLAttributes } from 'react';

import Image from 'next/image';

import { tv, VariantProps } from 'tailwind-variants';

import { AspectRatio } from '@/components/ui/AspectRatio/AspectRatio';
import { ImageProps } from '@/src/types/interfaces';
import { cn } from '@/src/utils/tailwindUtils';

type CardVariants = VariantProps<typeof card>;

export interface CardProps extends HTMLAttributes<HTMLElement>, CardVariants, ImageProps {}

export function Card({
  className,
  orientation,
  isReverse,
  src,
  alt,
  caption,
  children,
}: CardProps) {
  const styles = card({ orientation, isReverse });

  return (
    <div className={styles.base({ className })}>
      <figure>
        {src && (
          <AspectRatio ratio={16 / 9}>
            <Image className={styles.image()} src={src} alt={alt || ''} fill />

            {orientation === 'horizontal' && (
              <div
                className={cn('absolute top-10 h-0.5 w-14 bg-theme-brand-100', {
                  '-right-7': !isReverse,
                  '-left-7': isReverse,
                })}
              />
            )}
          </AspectRatio>
        )}

        {!!caption && <figcaption className="italic">{caption}</figcaption>}
      </figure>

      <div className={styles.content()}>{children}</div>
    </div>
  );
}

const card = tv({
  base: 'grid grid-flow-row items-center',
  slots: {
    content: 'p-8',
    image: 'object-cover object-center',
  },
  variants: {
    orientation: {
      horizontal: 'md:grid-flow-col md:grid-cols-2',
    },
    isReverse: {
      true: {
        content: '-order-1',
      },
    },
  },
});
