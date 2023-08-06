import { PropsWithChildren, ReactNode } from 'react';

import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';

export interface PagesLayout extends PropsWithChildren {
  modal: ReactNode;
}

export default function PagesLayout({ children, modal }: PagesLayout) {
  return (
    <>
      <Header />

      {children}

      <Footer />

      {modal}
    </>
  );
}
