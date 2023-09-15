import Image from 'next/image';

import { ImageProps } from '@/src/types/interfaces';
import { cn } from '@/src/utils/tailwindUtils';

export interface AvatarProps extends Omit<ImageProps, 'caption'> {
  className?: string;
  name?: string;
  company?: string;
}

export function Avatar({ className, src, alt, name, company }: AvatarProps) {
  return (
    <figure className={cn('flex flex-col items-center gap-6 text-center', className)}>
      {src && (
        <div className="relative">
          <Image
            className="h-60 w-40 rounded-full object-cover object-center contrast-125 saturate-50 sepia-[.5]"
            src={src}
            alt={alt || ''}
            width={160}
            height={240}
          />

          <span className="absolute inset-0 rounded-full shadow-[inset_0px_0px_10px_5px_rgba(255,255,255,1)]" />
        </div>
      )}

      {!!name && (
        <figcaption>
          <p className="text-xl font-medium uppercase text-theme-brand-300">{name}</p>

          {!!company && <p className="text-sm">{company}</p>}
        </figcaption>
      )}
    </figure>
  );
}
