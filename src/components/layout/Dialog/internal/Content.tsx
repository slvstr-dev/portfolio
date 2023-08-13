'use client';

import { PropsWithChildren, ReactNode } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';

import { Icon } from '@/components/ui/Icon/Icon';
import { cn } from '@/src/utils/tailwindUtils';

export interface ContentProps extends PropsWithChildren {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
}

export function Content({ children, className, title, description }: ContentProps) {
  return (
    <DialogPrimitive.Portal forceMount>
      <DialogPrimitive.Overlay asChild>
        <motion.div
          className="fixed inset-0 z-50 cursor-pointer bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: 'spring',
            duration: 0.4,
          }}
        />
      </DialogPrimitive.Overlay>

      <DialogPrimitive.Content asChild>
        <motion.div
          initial={{
            opacity: 0,
            top: '50%',
            left: '50%',
            translateX: '-50%',
          }}
          animate={{
            opacity: 1,
            y: '-50%',
          }}
          transition={{
            type: 'spring',
            duration: 0.4,
          }}
          exit={{
            opacity: 0,
            y: '50%',
          }}
          className={cn(
            'text-gray-900 data-[state=closed] fixed z-50 flex w-full max-w-lg flex-col items-center bg-theme-brand-100 p-8',
            className,
          )}>
          <DialogPrimitive.Close asChild>
            <Icon
              icon="X"
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
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
