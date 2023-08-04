'use client';

import { PropsWithChildren } from 'react';

import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/src/utils/tailwindUtils';

export interface SeperatorProps extends PropsWithChildren {
  className?: string;
}

export const Seperator = ({ className }: SeperatorProps) => {
  return <SeparatorPrimitive.Root className={cn('h-0.5 bg-theme-muted', className)} />;
};
