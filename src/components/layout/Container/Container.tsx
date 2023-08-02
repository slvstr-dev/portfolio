import { ElementType, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

type ContainerVariants = VariantProps<typeof container>;

export interface ContainerProps extends PropsWithChildren<ContainerVariants> {
  as?: ElementType;
  className?: string;
}

export default function Container({
  as,
  className,
  children,
  isCentered,
  direction,
}: ContainerProps) {
  const Component = as ?? 'section';

  const styles = container({ isCentered, direction });

  return (
    <Component className={twMerge(styles.base(), className)}>
      <div className={styles.children()}>{children}</div>
    </Component>
  );
}

const container = tv({
  base: 'py-10',
  slots: {
    children: 'container flex flex-col gap-10',
  },
  variants: {
    direction: {
      row: {
        children: 'flex-row items-center',
      },
      column: {
        children: 'flex-col justify-center',
      },
    },
    isCentered: {
      true: {
        children: 'items-center justify-center',
      },
    },
  },
  defaultVariants: {
    direction: 'column',
  },
});
