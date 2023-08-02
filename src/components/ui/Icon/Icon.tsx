import { SVGProps } from 'react';

import { twMerge } from 'tailwind-merge';

import * as Icons from './internal/index';

export type IconProps = SVGProps<SVGSVGElement> & {
  icon: keyof typeof Icons;
  className?: string;
};

export default function Icon({ className, icon, ...props }: IconProps) {
  const Component = Icons[icon];

  return <Component className={twMerge('h-4 w-4', className)} {...props} />;
}
