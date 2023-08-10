import { PropsWithChildren } from 'react';

import { cn } from '@/src/utils/tailwindUtils';

export interface TitleProps extends PropsWithChildren {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export function Title({ className, as, children }: TitleProps) {
  const Component = as ?? 'h2';

  return (
    <Component className={cn('text-center text-5xl leading-relaxed tracking-widest', className)}>
      {children}
    </Component>
  );
}
