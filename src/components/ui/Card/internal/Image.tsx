import ImageComponent, { ImageProps as ImageComponentProps } from 'next/image';

import { cn } from '@/src/utils/tailwindUtils';

export interface ImageProps extends ImageComponentProps {}

export default function Image({ className, ...props }: ImageProps) {
  return (
    <div className="">
      <ImageComponent className={cn('', className)} {...props} />
    </div>
  );
}
