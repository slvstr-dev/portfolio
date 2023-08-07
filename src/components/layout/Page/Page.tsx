import { PropsWithChildren } from 'react';

import Hero from '@/components/layout/Hero/Hero';
import { cn } from '@/src/utils/tailwindUtils';

export interface PageProps extends PropsWithChildren {
  className?: string;
  title?: string;
  backgroundImage?: string;
}

export default function Page({ children, className, title, backgroundImage }: PageProps) {
  return (
    <>
      {(!!title || !!backgroundImage) && <Hero backgroundImage={backgroundImage}>{title}</Hero>}

      <main className={cn('flex grow flex-col bg-theme-inverted', className)}>{children}</main>
    </>
  );
}
