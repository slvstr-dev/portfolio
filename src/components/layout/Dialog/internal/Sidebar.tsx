'use client';

import { PropsWithChildren } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';

import { Icon } from '@/components/ui/Icon/Icon';
import { cn } from '@/src/utils/tailwindUtils';

export interface SidebarProps extends PropsWithChildren {
  className?: string;
}

export function Sidebar({ children, className }: SidebarProps) {
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
            x: '10%',
          }}
          exit={{
            x: '100%',
          }}
          className={cn(
            'text-gray-900 fixed z-50 flex h-full w-full flex-col bg-theme-brand-100 p-8',
            className,
          )}>
          <DialogPrimitive.Close asChild>
            <Icon
              icon="X"
              className="absolute left-6 top-6 w-8 cursor-pointer transition-opacity hover:opacity-50"
            />
          </DialogPrimitive.Close>

          <div className="mt-10 flex h-full w-[90%] flex-col gap-4 overflow-y-scroll">
            {children}
          </div>
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
