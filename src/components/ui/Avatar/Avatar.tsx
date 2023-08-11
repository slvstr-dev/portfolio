import Image from 'next/image';

import { ImageProps } from '@/src/types/interfaces';
import { cn } from '@/src/utils/tailwindUtils';

export interface AvatarProps extends Omit<ImageProps, 'caption'> {
  className?: string;
  name?: string;
  occupation?: string;
}

export function Avatar({ className, src, alt, name, occupation }: AvatarProps) {
  return (
    <figure className={cn('flex flex-col items-center gap-6 text-center', className)}>
      {src && (
        <div className="relative h-60 w-40 overflow-hidden rounded-full shadow-[inset_0px_0px_10px_5px_rgba(255,255,255,1)]">
          <Image
            className="-z-10 object-cover object-center sepia"
            src={src}
            alt={alt || ''}
            fill
          />
        </div>
      )}

      {!!name && (
        <figcaption>
          <p className="text-xl font-medium uppercase text-theme-brand-300">{name}</p>

          {!!occupation && <p className="text-sm">{occupation}</p>}
        </figcaption>
      )}
    </figure>
  );
}
