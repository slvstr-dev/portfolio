'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { DialogContent } from './internal/DialogContent/DialogContent';

export interface DialogProps extends DialogPrimitive.DialogProps {}

export const Dialog = (props: DialogProps) => {
  return <DialogPrimitive.Root {...props} />;
};

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Close = DialogPrimitive.Close;
Dialog.Content = DialogContent;
