import NextImage, { type ImageProps as NextImageProps } from 'next/image';

import { cn } from '@/utils/tailwindUtils';

export interface ImageProps extends Omit<NextImageProps, 'alt'> {
  alt?: string;
  className?: string;
}

export function Image({ className, alt, ...props }: ImageProps) {
  return (
    <NextImage className={cn('object-cover object-center', className)} alt={alt || ''} {...props} />
  );
}
