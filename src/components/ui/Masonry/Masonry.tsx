import Image from 'next/image';

import { AspectRatio } from '@/components/ui/AspectRatio/AspectRatio';
import { cn } from '@/src/utils/tailwindUtils';

export interface MasonryProps {
  className?: string;
  images: {
    src: string;
    alt?: string;
  }[];
}

export function Masonry({ className, images }: MasonryProps) {
  return (
    <div className={cn('-m-8 gap-8 md:columns-2', className)}>
      {images.map((image, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <AspectRatio key={idx} className="mb-8" ratio={isEven ? 16 / 9 : 1 / 1}>
            <Image src={image.src} alt={image.alt || ''} fill />
          </AspectRatio>
        );
      })}
    </div>
  );
}
