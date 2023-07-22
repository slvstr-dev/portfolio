import Link from 'next-intl/link';
import { tv, type VariantProps } from 'tailwind-variants';

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  onClick?: <T>(event?: T) => void | Promise<void>;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link className={button({ ...props, class: className, disabled })} href={{ pathname: href }}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={button({ ...props, class: className, disabled })}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
}

const button = tv({
  variants: {
    color: {
      primary:
        'rounded-md bg-emerald-400 font-bold text-white transition-colors hover:bg-emerald-500 active:bg-emerald-500',
      secondary:
        'rounded-md bg-blue-400 font-bold text-white transition-colors hover:bg-blue-500 active:bg-blue-500',
      warning:
        'rounded-md bg-amber-400 font-bold text-white transition-colors hover:bg-amber-500 active:bg-amber-500',
      urgent:
        'rounded-md bg-red-400 font-bold text-white transition-colors hover:bg-red-500 active:bg-red-500',
    },
    disabled: {
      true: 'pointer-events-none bg-gray-500 opacity-50',
    },
    textSize: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    padding: {
      sm: 'px-1',
      md: 'px-2 py-1',
      lg: 'px-4 py-2',
      xl: 'px-6 py-3',
    },
  },
  defaultVariants: {
    textSize: 'md',
  },
});
