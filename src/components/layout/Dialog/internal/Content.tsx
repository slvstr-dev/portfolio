'use client';

import { ReactNode } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import Icon from '@/components/ui/Icon/Icon';
import { cn } from '@/src/utils/tailwindUtils';

export interface ContentProps extends Omit<DialogPrimitive.DialogContentProps, 'title'> {
  title?: ReactNode;
  description?: ReactNode;
}

export default function Content({
  children,
  className,
  title,
  description,
  ...props
}: ContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-[hide_200ms] data-[state=open]:animate-[show_200ms]" />

      <DialogPrimitive.Content
        className={cn(
          'text-gray-900 fixed left-1/2 top-1/2 z-50 flex w-full max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col items-center bg-theme-brand-100 p-8 data-[state=closed]:animate-[hide_200ms] data-[state=open]:animate-[show_200ms]',
          className,
        )}
        {...props}>
        <DialogPrimitive.Close asChild>
          <Icon
            icon="Cross"
            className="align-self-end ml-auto h-8 w-8 cursor-pointer transition-opacity hover:opacity-50"
          />
        </DialogPrimitive.Close>

        {(title || description) && (
          <div className="flex flex-col items-center gap-4 text-center lowercase italic">
            {title && <DialogPrimitive.Title className="text-4xl">{title}</DialogPrimitive.Title>}

            {description && (
              <DialogPrimitive.Description className="text-3xl">
                {description}
              </DialogPrimitive.Description>
            )}
          </div>
        )}

        <div className="mt-6">{children}</div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
