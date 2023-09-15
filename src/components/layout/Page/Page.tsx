import { PropsWithChildren } from 'react';

import { Header } from '@/components/layout/Header/Header';
import { Hero } from '@/components/layout/Hero/Hero';
import { cn } from '@/src/utils/tailwindUtils';

export interface PageProps extends PropsWithChildren {
  className?: string;
  title?: string;
  backgroundImage?: string;
}

export function Page({ children, className, title, backgroundImage }: PageProps) {
  return (
    <>
      <Header isLight={!!backgroundImage} />

      {(!!title || !!backgroundImage) && <Hero backgroundImage={backgroundImage}>{title}</Hero>}

      <main className={cn('flex grow flex-col overflow-x-hidden bg-theme-inverted', className)}>
        {children}
      </main>
    </>
  );
}
