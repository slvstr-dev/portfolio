import { PropsWithChildren } from 'react';

import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { cn } from '@/src/utils/tailwindUtils';

export interface PageProps extends PropsWithChildren {
  className?: string;
}

export const Page = ({ children, className }: PageProps) => {
  return (
    <>
      <Header />

      <main className={cn('flex grow flex-col bg-theme-inverted', className)}>{children}</main>

      <Footer />
    </>
  );
};
