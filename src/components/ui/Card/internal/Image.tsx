import ImageComponent, { ImageProps as ImageComponentProps } from 'next/image';

import { cn } from '@/src/utils/tailwindUtils';

export interface ImageProps extends Omit<ImageComponentProps, 'alt'> {
  alt?: string;
}

export default function Image({ className, alt = '', ...props }: ImageProps) {
  return (
    <div className="relative h-40">
      <ImageComponent
        className={cn('absolute inset-0 object-cover object-center', className)}
        alt={alt}
        fill
        {...props}
      />
    </div>
  );
}
