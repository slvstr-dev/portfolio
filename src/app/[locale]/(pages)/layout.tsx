import { PropsWithChildren } from 'react';

import { Footer } from '@/components/layout/Footer/Footer';

import { ParamsProps } from '../layout';

export interface PagesLayout extends ParamsProps, PropsWithChildren {}

export default function PagesLayout({ children, params: { locale } }: PagesLayout) {
  return (
    <>
      {children}

      <Footer locale={locale} />
    </>
  );
}
