import { PropsWithChildren } from 'react';

import { Header } from '@/components/layout/Header/Header';
import { Hero } from '@/components/layout/Hero/Hero';
import { cn } from '@/utils/tailwindUtils';

export interface PageProps extends PropsWithChildren {
  className?: string;
  title?: string;
  src?: string;
}

export function Page({ children, className, title, src }: PageProps) {
  return (
    <>
      <header>
        <Header isLight={!!src} />

        {(!!title || !!src) && <Hero src={src}>{title}</Hero>}
      </header>

      <main className={cn('flex grow flex-col overflow-x-hidden bg-theme-inverted', className)}>
        {children}
      </main>
    </>
  );
}
