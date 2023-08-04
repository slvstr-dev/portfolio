import { DialogPrimitive } from '@/components/radix/DialogPrimitive';

import DialogContent from './internal/DialogContent/DialogContent';

export interface DialogProps extends DialogPrimitive.DialogProps {}

export default function Dialog(props: DialogProps) {
  return <DialogPrimitive.Root {...props} />;
}

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Close = DialogPrimitive.Close;
Dialog.Content = DialogContent;
