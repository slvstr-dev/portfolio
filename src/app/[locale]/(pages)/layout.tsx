import { PropsWithChildren } from 'react';

import { ParamsProps } from '@/app/[locale]/layout';
import { Footer } from '@/components/layout/Footer/Footer';

export interface PagesLayout extends ParamsProps, PropsWithChildren {}

export default function PagesLayout({ children, params: { locale } }: PagesLayout) {
  return (
    <>
      {children}

      <Footer locale={locale} />
    </>
  );
}
