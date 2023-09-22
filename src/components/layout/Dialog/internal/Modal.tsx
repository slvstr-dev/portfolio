import type { PropsWithChildren, ReactNode } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';

import { Icon } from '@/components/ui/Icon/Icon';
import { cn } from '@/utils/tailwindUtils';

export interface ModalProps extends PropsWithChildren {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
}

export function Modal({ children, className, title, description }: ModalProps) {
  return (
    <DialogPrimitive.Portal forceMount>
      <DialogPrimitive.Overlay asChild>
        <motion.div
          className="fixed inset-0 z-50 cursor-pointer bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
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
            'text-gray-900 fixed z-50 flex max-h-[90%] w-[90%] max-w-lg flex-col items-center gap-2.5 bg-theme-brand-100 px-8 pb-7 pt-10 md:gap-5 md:px-16 md:py-14',
            className,
          )}>
          <DialogPrimitive.Close asChild>
            <Icon
              icon="Close"
              className="absolute right-4 top-4 w-8 cursor-pointer transition-opacity hover:opacity-50"
            />
          </DialogPrimitive.Close>

          {title && (
            <DialogPrimitive.Title className="text-center text-2xl lowercase italic md:text-3xl">
              {title}
            </DialogPrimitive.Title>
          )}

          {description && (
            <DialogPrimitive.Description className="text-center text-xl lowercase italic md:text-2xl">
              {description}
            </DialogPrimitive.Description>
          )}

          <div className="mt-4 w-full">{children}</div>
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
