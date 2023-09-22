import type { SVGProps } from 'react';

import { cn } from '@/utils/tailwindUtils';

import * as Icons from './internal/index';

export type IconProps = SVGProps<SVGSVGElement> & {
  icon: keyof typeof Icons;
  className?: string;
};

export function Icon({ className, icon, ...props }: IconProps) {
  const Component = Icons[icon];

  return <Component className={cn('h-auto w-4', className)} {...props} />;
}
