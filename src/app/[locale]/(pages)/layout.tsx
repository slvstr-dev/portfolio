import type { PropsWithChildren } from 'react';

import type { ParamsProps } from '@/app/[locale]/layout';
import { Footer } from '@/components/layout/Footer/Footer';
import { unstable_setRequestLocale } from 'next-intl/server';

export interface PagesLayout extends ParamsProps, PropsWithChildren {}

export default function PagesLayout({ children, params: { locale } }: PagesLayout) {
  unstable_setRequestLocale(locale);

  return (
    <>
      {children}

      <Footer locale={locale} />
    </>
  );
}
