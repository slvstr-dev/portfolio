import type { PropsWithChildren } from 'react';
import '@/styles/global.css';

interface RootProps extends PropsWithChildren {}

export default function RootLayout({ children }: RootProps) {
  return children;
}
