'use client';

import { PropsWithChildren } from 'react';

import { cn } from '@/src/utils/tailwindUtils';

import { Item } from './internal/Item';

export interface SliderProps extends PropsWithChildren {
  className?: string;
}

export function Slider({ className, ...props }: SliderProps) {
  return <div className={cn('', className)} {...props} />;
}

Slider.Item = Item;
