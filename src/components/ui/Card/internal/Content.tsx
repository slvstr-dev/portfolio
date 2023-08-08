import { HTMLAttributes } from 'react';

import { cn } from '@/src/utils/tailwindUtils';

export interface ContentProps extends HTMLAttributes<HTMLDivElement> {}

export function Content({ className, ...props }: ContentProps) {
  return <div className={cn('', className)} {...props} />;
}
