import type { HTMLAttributes } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

import { Image, type ImageProps } from '@/components/ui/Image/Image';
import { cn } from '@/utils/tailwindUtils';

type CardVariants = VariantProps<typeof card>;

export interface CardProps extends HTMLAttributes<HTMLElement>, CardVariants {
  alt?: ImageProps['alt'];
  src?: ImageProps['src'];
  priority?: ImageProps['priority'];
  caption?: string;
}

export function Card({
  className,
  orientation = 'vertical',
  isReverse,
  src,
  alt,
  caption,
  children,
  priority,
}: CardProps) {
  const styles = card({ orientation, isReverse });

  return (
    <div className={styles.base({ className })}>
      {src && (
        <figure>
          <div className="relative aspect-video">
            <Image
              className="bg-theme-muted/25"
              src={src}
              alt={alt}
              sizes="(max-width: 1024px) 90vw, 800px"
              priority={priority}
              fill
            />

            {orientation === 'horizontal' && (
              <div
                className={cn('absolute top-10 h-0.5 w-14 bg-theme-brand-100', {
                  '-right-7': !isReverse,
                  '-left-7': isReverse,
                })}
              />
            )}
          </div>

          {!!caption && <figcaption className="italic">{caption}</figcaption>}
        </figure>
      )}

      <div className={styles.content()}>{children}</div>
    </div>
  );
}

const card = tv({
  slots: {
    base: 'grid grid-flow-row items-center gap-8',
    content: '',
  },
  variants: {
    orientation: {
      vertical: '',
      horizontal: {
        base: 'md:grid-flow-col md:grid-cols-2',
      },
    },
    isReverse: {
      true: {
        content: '-order-1',
      },
    },
  },
});
