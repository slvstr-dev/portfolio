import { PropsWithChildren } from 'react';

import { cn } from '@/src/utils/tailwindUtils';

export interface ItemProps extends PropsWithChildren {
  className?: string;
  year?: number;
}

export function Item({ className, year, children }: ItemProps) {
  return (
    <div className={cn('', className)}>
      {!!year && <h4 className="text-9xl font-black text-theme-brand-100">{year}</h4>}

      {children}
    </div>
  );
}
