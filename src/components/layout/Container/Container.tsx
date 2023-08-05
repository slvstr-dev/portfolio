import { ElementType, PropsWithChildren } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/src/utils/tailwindUtils';

type ContainerVariants = VariantProps<typeof container>;

export interface ContainerProps extends PropsWithChildren<ContainerVariants> {
  as?: ElementType;
  className?: string;
}

export const Container = ({
  as,
  className,
  children,
  isCentered,
  direction,
  maxWidth,
  verticalPadding,
}: ContainerProps) => {
  const Component = as ?? 'section';

  const styles = container({ isCentered, direction, maxWidth, verticalPadding });

  return (
    <Component className={cn(styles.base(), className)}>
      <div className={styles.children()}>{children}</div>
    </Component>
  );
};

const container = tv({
  base: '',
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
    verticalPadding: {
      none: 'py-0',
      sm: 'py-5',
      md: 'py-10',
      lg: 'py-20',
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
  },
  defaultVariants: {
    direction: 'column',
    maxWidth: '2xl',
    verticalPadding: 'md',
  },
});
