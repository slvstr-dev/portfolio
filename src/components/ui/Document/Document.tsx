import { type PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwindUtils';

export interface ErrorProps extends PropsWithChildren {
  className?: string;
}

export function Document({ className, children }: ErrorProps) {
  return (
    <article
      className={cn(
        'm-4 border border-theme-muted bg-theme-brand-100 p-8 ring-[16px] ring-theme-brand-100',
        className,
      )}>
      {children}
    </article>
  );
}
