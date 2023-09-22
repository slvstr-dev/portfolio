import type { PropsWithChildren } from 'react';

import { Icon, type IconProps } from '@/components/ui/Icon/Icon';
import { cn } from '@/utils/tailwindUtils';

export interface FeaturedTextProps extends PropsWithChildren {
  className?: string;
  icon?: IconProps['icon'];
}

export function FeaturedText({ className, children, icon }: FeaturedTextProps) {
  return (
    <p
      className={cn(
        'flex flex-col items-center text-center text-3xl font-light leading-relaxed tracking-widest md:text-4xl md:leading-relaxed',
        className,
      )}>
      {icon && <Icon icon={icon} className="block w-20 text-theme-brand-100" />}
      &quot;{children}&quot;
    </p>
  );
}
