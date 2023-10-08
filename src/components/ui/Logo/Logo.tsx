import { useTranslations } from 'next-intl';
import { tv, type VariantProps } from 'tailwind-variants';

import { Anchor } from '@/components/ui/Anchor/Anchor';

type LogoVariants = VariantProps<typeof logo>;

export interface LogoProps extends LogoVariants {
  className?: string;
}

export function Logo({ className, isLight }: LogoProps) {
  const t = useTranslations('components.ui.logo');

  const styles = logo({ isLight });

  return (
    <span className={styles.base({ className })}>
      {t.rich('title', {
        tag: (chunks) => (
          <Anchor href="/" className={styles.anchor()}>
            {chunks}
          </Anchor>
        ),
      })}
    </span>
  );
}

const logo = tv({
  slots: {
    base: 'text-3xl font-light transition-opacity hover:opacity-50',
    anchor: '',
  },
  variants: {
    isLight: {
      true: {
        anchor: 'text-white',
      },
    },
  },
});
