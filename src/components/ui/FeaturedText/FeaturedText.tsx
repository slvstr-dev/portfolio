import { PropsWithChildren } from 'react';

import { Icon, IconProps } from '@/components/ui/Icon/Icon';
import { cn } from '@/src/utils/tailwindUtils';

export interface FeaturedTextProps extends PropsWithChildren {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  icon?: IconProps['icon'];
}

export function FeaturedText({ className, as, children, icon }: FeaturedTextProps) {
  const Component = as ?? 'h2';

  return (
    <Component
      className={cn(
        'flex flex-col items-center text-center text-3xl font-light leading-relaxed tracking-widest md:text-4xl md:leading-relaxed',
        className,
      )}>
      {icon && <Icon icon={icon} className="block w-20 text-theme-brand-100" />}
      &quot;{children}&quot;
    </Component>
  );
}
