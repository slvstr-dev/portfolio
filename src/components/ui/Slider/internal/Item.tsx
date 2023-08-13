'use client';

import { PropsWithChildren } from 'react';

import { cn } from '@/src/utils/tailwindUtils';

export interface ItemProps extends PropsWithChildren {
  className?: string;
}

export function Item({ className, children, ...props }: ItemProps) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}
