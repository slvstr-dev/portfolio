import { PropsWithChildren, ReactNode } from 'react';

import Footer from '@/components/layout/Footer/Footer';

export interface PagesLayout extends PropsWithChildren {
  modal: ReactNode;
}

export default function PagesLayout({ children, modal }: PagesLayout) {
  return (
    <>
      {children}

      <Footer />

      {modal}
    </>
  );
}
