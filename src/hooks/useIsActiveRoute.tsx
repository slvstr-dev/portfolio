import { usePathname } from 'next/navigation';

export const useIsActiveRoute = (href: string) => {
  const pathname = usePathname();

  return pathname === href;
};
