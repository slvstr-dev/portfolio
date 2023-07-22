import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en-GB', 'nl-NL'],
  defaultLocale: 'en-GB',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
