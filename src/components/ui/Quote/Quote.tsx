import { PropsWithChildren } from 'react';

import Icon, { IconProps } from '@/components/ui/Icon/Icon';
import { cn } from '@/src/utils/tailwindUtils';

export interface QuoteProps extends PropsWithChildren {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  icon?: IconProps['icon'];
}

export default function Quote({ className, as, children, icon }: QuoteProps) {
  const Component = as ?? 'h2';

  return (
    <Component
      className={cn(
        'flex flex-col items-center text-center text-4xl font-light leading-relaxed tracking-widest',
        className,
      )}>
      {icon && <Icon icon={icon} className="block h-20 w-20 text-theme-brand-100" />}
      &quot;{children}&quot;
    </Component>
  );
}
