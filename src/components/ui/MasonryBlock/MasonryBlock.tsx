import { Image, type ImageProps } from '@/components/ui/Image/Image';
import { cn } from '@/utils/tailwindUtils';

type MasonryImage = ImageProps & {
  caption?: string;
};

export interface MasonryBlockProps {
  className?: string;
  images: [MasonryImage, MasonryImage, MasonryImage, MasonryImage];
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
          <figure
            key={idx}
            className={cn('col-span-4 flex aspect-video flex-col md:aspect-auto', {
              'md:col-span-3 md:row-span-2': idx === 0 || idx === 1,
              'md:col-span-1 md:row-span-3': idx === 2,
              'md:col-span-1 md:row-span-1': idx === 3,
            })}>
            <div className="relative h-full w-full">
              <Image fill alt="" {...image} />
            </div>

            {!!image.caption && <figcaption className="italic">{image.caption}</figcaption>}
          </figure>
        );
      })}
    </div>
  );
}
