import { PropsWithChildren } from 'react';

import { cn } from '@/src/utils/tailwindUtils';

import { Item } from './internal/Item';

export interface TimelineProps extends PropsWithChildren {
  className?: string;
  year?: number;
}

export function Timeline({ className, children, year }: TimelineProps) {
  return (
    <div className={cn('', className)}>
      {!!year && (
        <h4 className="mb-10 truncate text-9xl font-black text-theme-brand-100">{year}</h4>
      )}

      <div className="grid">{children}</div>
    </div>
  );
}

Timeline.Item = Item;
