import type { InputHTMLAttributes } from 'react';

import type { UseFormRegisterReturn } from 'react-hook-form';

import { cn } from '@/utils/tailwindUtils';

export interface InputProps {
  className?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  errorMessage?: string;
  register?: UseFormRegisterReturn;
}

export function Input({
  className,
  errorMessage,
  placeholder,
  type = 'text',
  register,
}: InputProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          'border border-white px-4 py-1 font-monospace lowercase outline-theme-brand-300 transition-colors',
          {
            'border-theme-brand-300': errorMessage,
          },
        )}
        {...register}
      />

      {errorMessage && <p className="italic text-theme-brand-300">{errorMessage}</p>}
    </div>
  );
}
