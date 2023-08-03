import { PropsWithChildren } from 'react';

import { DialogPrimitive } from '@/components/radix/DialogPrimitive';
import { cn } from '@/src/utils/tailwindUtils';

export interface DialogContentProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

export default function DialogContent({ children, className, title }: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-theme-base opacity-50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />

      <DialogPrimitive.Content
        className={cn(
          'fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-theme-brand-100 p-8 data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]',
          className,
        )}>
        <div className="flex items-center justify-between">
          {title && <DialogPrimitive.Title className="text-xl">{title}</DialogPrimitive.Title>}

          <DialogPrimitive.Close className="transition-opacity hover:opacity-50">
            {/* <Icon icon="X" /> */}
            Close
          </DialogPrimitive.Close>
        </div>

        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
