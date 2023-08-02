import { PropsWithChildren } from 'react';

import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import Section from '@/components/layout/Container/Container';
import Anchor from '@/components/ui/Anchor/Anchor';

export interface CopyrightProps extends PropsWithChildren {
  className?: string;
}

export default function Copyright({ className }: CopyrightProps) {
  const t = useTranslations('components.copyright');

  return (
    <Section className={twMerge('bg-white', className)}>
      <h2 className="font-handwriting text-xl font-bold uppercase">
        {t.rich('date', {
          link: (chunks) => (
            <Anchor
              href="https://www.linkedin.com/in/sylvesterhofstra/"
              target="_blank"
              className="transition-opacity hover:opacity-50">
              {chunks}
            </Anchor>
          ),
          date: new Date().getFullYear(),
        })}
      </h2>
    </Section>
  );
}
