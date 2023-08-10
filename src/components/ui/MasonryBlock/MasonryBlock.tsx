import Image from 'next/image';

import { ImageProps } from '@/src/types/interfaces';
import { cn } from '@/src/utils/tailwindUtils';

export interface MasonryBlockProps {
  className?: string;
  images: [ImageProps, ImageProps, ImageProps, ImageProps];
}

export function MasonryBlock({ className, images }: MasonryBlockProps) {
  return (
    <div
      className={cn(
        'grid aspect-square h-full grid-flow-col grid-cols-4 grid-rows-4 gap-8',
        className,
      )}>
      {images.map((image, idx) => {
        return (
          <div
            key={idx}
            className={cn('relative col-span-4 aspect-video md:aspect-auto', {
              'md:col-span-3 md:row-span-2': idx === 0 || idx === 1,
              'md:col-span-1 md:row-span-3': idx === 2,
              'md:col-span-1 md:row-span-1': idx === 3,
            })}>
            <Image
              src={image.src}
              alt={image.alt || ''}
              className="object-cover object-center"
              fill
            />
          </div>
        );
      })}
    </div>
  );
}
