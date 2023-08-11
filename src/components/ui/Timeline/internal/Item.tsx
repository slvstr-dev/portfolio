import { PropsWithChildren } from 'react';

import { cn } from '@/src/utils/tailwindUtils';

export interface ItemProps extends PropsWithChildren {
  className?: string;
  year?: number;
}

export function Item({ className, year, children }: ItemProps) {
  return (
    <div
      className={cn('relative', className, {
        'pt-[6.25rem]': !!year,
      })}>
      {!!year && (
        <h4 className="absolute top-0 z-10 truncate text-9xl font-black text-theme-brand-100">
          {year}
        </h4>
      )}

      {children}
    </div>
  );
}
