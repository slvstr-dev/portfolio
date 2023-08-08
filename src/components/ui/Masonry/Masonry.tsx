import Image from 'next/image';

import { AspectRatio } from '@/components/ui/AspectRatio/AspectRatio';
import { cn } from '@/src/utils/tailwindUtils';

export interface MasonryProps {
  className?: string;
}

export function Masonry({ className }: MasonryProps) {
  return (
    <div className={cn('grid grid-flow-col gap-8', className)}>
      <AspectRatio>
        <Image
          className="object-cover object-center"
          src="https://placehold.co/600x400/png"
          alt=""
          fill
        />
      </AspectRatio>

      <AspectRatio>
        <Image
          className="object-cover object-center"
          src="https://placehold.co/600x400/png"
          alt=""
          fill
        />
      </AspectRatio>

      <AspectRatio>
        <Image
          className="object-cover object-center"
          src="https://placehold.co/600x400/png"
          alt=""
          fill
        />
      </AspectRatio>

      <AspectRatio>
        <Image
          className="object-cover object-center"
          src="https://placehold.co/600x400/png"
          alt=""
          fill
        />
      </AspectRatio>
    </div>
  );
}
