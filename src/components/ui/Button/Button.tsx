import Link from 'next-intl/link';
import { tv, type VariantProps } from 'tailwind-variants';

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  onClick?: <T>(event?: T) => void | Promise<void>;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  onClick,
  href,
  type = 'button',
  isDisabled,
  isLoading,
  className,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link
        className={button({ ...props, class: className, isDisabled, isLoading })}
        href={{ pathname: href }}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={button({ ...props, class: className, isDisabled, isLoading })}
      onClick={onClick}
      type={type}
      disabled={isDisabled}>
      {isLoading && (
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}

      {children}
    </button>
  );
}

const button = tv({
  base: 'inline-flex items-center rounded-md font-bold text-white transition-colors',
  variants: {
    color: {
      red: 'bg-red-200 hover:bg-red-300 active:bg-red-300',
      gray: 'bg-gray-200 hover:bg-gray-300 active:bg-gray-300',
    },
    isDisabled: {
      true: 'pointer-events-none opacity-50',
    },
    isLoading: {
      true: 'pointer-events-none',
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
    isDisabled: false,
    isLoading: false,
    textSize: 'md',
    padding: 'lg',
    color: 'red',
  },
});
