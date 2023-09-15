import { ElementType, PropsWithChildren } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

type ContainerVariants = VariantProps<typeof container>;

export interface ContainerProps extends PropsWithChildren<ContainerVariants> {
  id?: string;
  as?: ElementType;
  className?: string;
}

export function Container({
  id,
  className,
  children,
  isCentered,
  orientation,
  maxWidth,
  verticalPadding,
  gap,
}: ContainerProps) {
  const styles = container({ isCentered, orientation, maxWidth, verticalPadding, gap });

  return (
    <div id={id} className={styles.base({ className })}>
      <div className={styles.children()}>{children}</div>
    </div>
  );
}

const container = tv({
  base: '',
  slots: {
    children: 'container flex flex-col gap-10',
  },
  variants: {
    orientation: {
      row: {
        children: 'flex-row items-center ',
      },
      column: {
        children: 'flex-col justify-center',
      },
    },
    gap: {
      none: {
        children: 'gap-0',
      },
      xs: {
        children: 'gap-2.5 md:gap-5',
      },
      sm: {
        children: 'gap-5 md:gap-10',
      },
      md: {
        children: 'gap-10 md:gap-20',
      },
      lg: {
        children: 'gap-20 md:gap-40',
      },
    },
    maxWidth: {
      xs: {
        children: 'max-w-screen-xs',
      },
      sm: {
        children: 'max-w-screen-sm',
      },
      md: {
        children: 'max-w-screen-md',
      },
      lg: {
        children: 'max-w-screen-lg',
      },
      xl: {
        children: 'max-w-screen-xl',
      },
      '2xl': {
        children: 'max-w-screen-2xl',
      },
    },
    verticalPadding: {
      none: 'py-0',
      sm: 'py-2.5 md:py-5',
      md: 'py-5 md:py-10',
      lg: 'py-10 md:py-20',
    },
    isCentered: {
      true: {
        children: 'items-center justify-center',
      },
    },
  },
  defaultVariants: {
    orientation: 'column',
    maxWidth: 'xl',
    verticalPadding: 'md',
    gap: 'md',
  },
});
