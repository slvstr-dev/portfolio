'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/src/utils/tailwindUtils';

export interface SeperatorProps extends SeparatorPrimitive.SeparatorProps {}

export function Seperator({ className, ...props }: SeperatorProps) {
  return <SeparatorPrimitive.Root className={cn('h-0.5 bg-theme-muted', className)} {...props} />;
}
