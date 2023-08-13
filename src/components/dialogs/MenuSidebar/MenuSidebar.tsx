'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { ContactModal } from '@/components/dialogs/ContactModal/ContactModal';
import { Dialog } from '@/components/layout/Dialog/Dialog';
import { MainMenu } from '@/components/navigation/MainMenu/MainMenu';
import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';

export interface MenuSidebarProps {
  className?: string;
}

export function MenuSidebar({ className }: MenuSidebarProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} modal>
      <Dialog.Trigger asChild>
        <Button className={className} onClick={handleOpen}>
          <Icon icon="List" className="w-8" />
        </Button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Sidebar>
            <MainMenu className="flex-col gap-4" />

            <ContactModal className="mt-auto" />
          </Dialog.Sidebar>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
