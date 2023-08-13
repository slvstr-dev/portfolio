'use client';

import { PropsWithChildren, ReactNode } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';

import { Icon } from '@/components/ui/Icon/Icon';
import { cn } from '@/src/utils/tailwindUtils';

export interface SidebarProps extends PropsWithChildren {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
}

export function Sidebar({ children, className, title, description }: SidebarProps) {
  return (
    <DialogPrimitive.Portal forceMount>
      <DialogPrimitive.Overlay asChild>
        <motion.div
          className="fixed inset-0 z-50 cursor-pointer bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </DialogPrimitive.Overlay>

      <DialogPrimitive.Content asChild>
        <motion.div
          initial={{
            x: '100%',
          }}
          animate={{
            x: '25%',
          }}
          exit={{
            x: '100%',
          }}
          className={cn(
            'text-gray-900 fixed z-50 flex h-full w-full flex-col bg-theme-brand-100 p-8 pr-12',
            className,
          )}>
          <DialogPrimitive.Close asChild>
            <Icon icon="X" className="w-8 cursor-pointer transition-opacity hover:opacity-50" />
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

          <div className="mt-6 flex h-full w-3/4 flex-col gap-4 overflow-y-scroll">{children}</div>
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
