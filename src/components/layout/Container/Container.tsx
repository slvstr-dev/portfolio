import { ElementType, PropsWithChildren } from 'react';

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
  maxWidth,
  verticalPadding,
  gap,
}: ContainerProps) {
  const Component = as ?? 'section';

  const styles = container({ isCentered, direction, maxWidth, verticalPadding, gap });

  return (
    <Component className={styles.base({ className })}>
      <div className={styles.children()}>{children}</div>
    </Component>
  );
}

const container = tv({
  base: '',
  slots: {
    children: 'container flex flex-col gap-10',
  },
  variants: {
    direction: {
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
      sm: 'py-5',
      md: 'py-10',
      lg: 'py-20',
    },
    isCentered: {
      true: {
        children: 'items-center justify-center',
      },
    },
  },
  defaultVariants: {
    direction: 'column',
    maxWidth: '2xl',
    verticalPadding: 'md',
    gap: 'md',
  },
});
