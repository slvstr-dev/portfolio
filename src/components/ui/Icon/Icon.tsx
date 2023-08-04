import { SVGProps } from 'react';

import { cn } from '@/src/utils/tailwindUtils';

import * as Icons from './internal/index';

export type IconProps = SVGProps<SVGSVGElement> & {
  icon: keyof typeof Icons;
  className?: string;
};

export const Icon = ({ className, icon, ...props }: IconProps) => {
  const Component = Icons[icon];

  return <Component className={cn('h-4 w-4', className)} {...props} />;
};
