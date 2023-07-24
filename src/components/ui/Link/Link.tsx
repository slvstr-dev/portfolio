import NextIntlLink from 'next-intl/link';
import { tv, type VariantProps } from 'tailwind-variants';

type LinkVariants = VariantProps<typeof link>;

export type LinkProps = LinkVariants & {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export default function Link({ children, href, className, ...props }: LinkProps) {
  return (
    <NextIntlLink className={link({ ...props, class: className })} href={{ pathname: href }}>
      {children}
    </NextIntlLink>
  );
}

const link = tv({
  base: 'transition-opacity hover:opacity-50 active:underline',
  variants: {
    hasUnderline: {
      true: 'underline hover:no-underline',
    },
  },
});
