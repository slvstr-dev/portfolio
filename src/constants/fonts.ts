import { Inconsolata, Playfair } from 'next/font/google';

import { cn } from '@/utils/tailwindUtils';

const playfair = Playfair({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  display: 'swap',
});

export const fonts = cn(playfair.variable, inconsolata.variable);
