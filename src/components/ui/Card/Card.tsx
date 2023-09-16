import { HTMLAttributes } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { Image, ImageProps } from '@/components/ui/Image/Image';
import { cn } from '@/utils/tailwindUtils';

type CardVariants = VariantProps<typeof card>;

export interface CardProps extends HTMLAttributes<HTMLElement>, CardVariants {
  alt?: ImageProps['alt'];
  src?: ImageProps['src'];
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
}: CardProps) {
  const styles = card({ orientation, isReverse });

  return (
    <div className={styles.base({ className })}>
      {src && (
        <figure>
          <div className="relative aspect-video">
            <Image className="bg-theme-brand-100" src={src} alt={alt} fill />

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
  base: 'grid grid-flow-row items-center',
  slots: {
    content: 'p-8',
  },
  variants: {
    orientation: {
      vertical: {
        content: 'px-0',
      },
      horizontal: {
        base: 'md:grid-flow-col md:grid-cols-2',
        content: 'py-0',
      },
    },
    isReverse: {
      true: {
        content: '-order-1',
      },
    },
  },
});
