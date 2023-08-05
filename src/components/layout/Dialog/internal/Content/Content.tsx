'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Icon } from '@/components/ui/Icon/Icon';
import { cn } from '@/src/utils/tailwindUtils';

export interface ContentProps extends DialogPrimitive.DialogContentProps {
  description?: string;
}

export const Content = ({ children, className, title, description, ...props }: ContentProps) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[hide_200ms] data-[state=open]:animate-[show_200ms]" />

      <DialogPrimitive.Content
        className={cn(
          'text-gray-900 fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-theme-brand-100 p-8 data-[state=closed]:animate-[hide_200ms] data-[state=open]:animate-[show_200ms]',
          className,
        )}
        {...props}>
        <div className="flex items-center justify-between">
          {title && <DialogPrimitive.Title className="text-xl">{title}</DialogPrimitive.Title>}

          <DialogPrimitive.Close asChild>
            <Icon
              icon="Cross"
              className="h-8 w-8 cursor-pointer transition-opacity hover:opacity-50"
            />
          </DialogPrimitive.Close>
        </div>

        {description && (
          <DialogPrimitive.Description className="text-lg">
            {description}
          </DialogPrimitive.Description>
        )}

        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};
