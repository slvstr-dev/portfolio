import { HTMLAttributes } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

// import Content from './internal/Content';
// import Image from './internal/Image';

type CardVariants = VariantProps<typeof card>;

export interface CardProps extends HTMLAttributes<HTMLElement>, CardVariants {}

export default function Card({ className, orientation, ...props }: CardProps) {
  return <article className={card({ className, orientation })} {...props} />;
}

const card = tv({
  base: 'flex gap-4 rounded-lg shadow-md',
  variants: {
    orientation: {
      row: 'flex-row',
      column: 'flex-col',
      rowReverse: 'flex-row-reverse',
      columnReverse: 'flex-col-reverse',
    },
  },
  defaultVariants: {
    orientation: 'column',
  },
});

// Card.Content = Content;
// Card.Image = Image;
