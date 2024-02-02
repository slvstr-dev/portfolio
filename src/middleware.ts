import createMiddleware from 'next-intl/middleware';
import { locales } from './navigation';

export default createMiddleware({
  locales,
  defaultLocale: locales[0],
});

export const config = {
  matcher: ['/', `/(en)/:path*/:path*`, '/((?!_next|_vercel|.*\\..*).*)'],
};
