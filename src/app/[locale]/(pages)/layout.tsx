import { PropsWithChildren } from 'react';

import { Footer } from '@/components/layout/Footer/Footer';

export interface PagesLayout extends PropsWithChildren {}

export default function PagesLayout({ children }: PagesLayout) {
  return (
    <>
      {children}

      <Footer />
    </>
  );
}
