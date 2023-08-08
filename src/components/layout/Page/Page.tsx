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
      <Header className={cn({ 'text-white': !!backgroundImage })} />

      {(!!title || !!backgroundImage) && <Hero backgroundImage={backgroundImage}>{title}</Hero>}

      <main className={cn('flex grow flex-col bg-theme-inverted', className)}>{children}</main>
    </>
  );
}
