import { HTMLAttributes } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

type CardVariants = VariantProps<typeof content>;

export interface CardProps extends HTMLAttributes<HTMLElement>, CardVariants {}

export default function Content({ className, ...props }: CardProps) {
  return <article className={content({ className })} {...props} />;
}

const content = tv({});
