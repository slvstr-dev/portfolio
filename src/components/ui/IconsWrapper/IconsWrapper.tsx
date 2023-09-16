import { PropsWithChildren } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { Icon, IconProps } from '@/components/ui/Icon/Icon';
import { cn } from '@/utils/tailwindUtils';

type IconsWrapperVariants = VariantProps<typeof iconsWrapper>;

export interface IconsWrapperProps extends IconsWrapperVariants, PropsWithChildren {
  className?: string;
  icons: [IconProps['icon'], IconProps['icon'], IconProps['icon']?, IconProps['icon']?];
}

export function IconsWrapper({ className, color, children, icons }: IconsWrapperProps) {
  const styles = iconsWrapper({ color });

  return (
    <div className={styles.base({ className })}>
      {icons.map((icon, idx) => {
        if (!icon) return null;

        return (
          <div
            key={idx}
            className={styles.icon({
              class: cn('col-span-2 row-span-2', {
                'col-start-1 row-start-2': idx === 0,
                'col-start-7 row-start-4': idx === 1,
                'col-start-5 row-start-1': idx === 2,
                'col-start-2 row-start-5': idx === 3,
              }),
            })}>
            <Icon icon={icon} className={styles.icon()} />
          </div>
        );
      })}

      <div className={styles.children()}>{children}</div>
    </div>
  );
}

const iconsWrapper = tv({
  slots: {
    base: 'relative grid grid-cols-8 grid-rows-6',
    icon: 'w-full',
    children: 'absolute inset-0 flex flex-col items-center justify-center',
  },
  variants: {
    color: {
      brand: {
        icon: 'text-theme-brand-200',
      },
    },
  },
});
