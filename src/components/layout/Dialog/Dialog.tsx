'use client';

import { ReactNode } from 'react';

import { DialogPrimitive } from '@/components/radix/DialogPrimitive';

import DialogContent from './internal/DialogContent/DialogContent';

export default function Dialog({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  );
}

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Close = DialogPrimitive.Close;
Dialog.Content = DialogContent;
