import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { tv, type VariantProps } from 'tailwind-variants';

import { MainMenu } from '@/components/blocks/MainMenu/MainMenu';
import { ContactModal } from '@/components/dialogs/ContactModal/ContactModal';
import { Dialog } from '@/components/layout/Dialog/Dialog';
import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';

type MenuSidebarVariants = VariantProps<typeof menuSidebar>;

export interface MenuSidebarProps extends MenuSidebarVariants {
  className?: string;
}

export function MenuSidebar({ className }: MenuSidebarProps) {
  const t = useTranslations('components.dialogs.menu_sidebar');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = menuSidebar();

  return (
    <Dialog open={open} onOpenChange={setOpen} modal>
      <Dialog.Trigger asChild>
        <Button
          title={t('buttons.open')}
          className={styles.button({ className })}
          onClick={handleOpen}>
          <Icon icon="Menu" className={styles.icon()} />
        </Button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Sidebar>
            <MainMenu className={styles.mainMenu()} onChange={handleClose} />

            <ContactModal className={styles.contactModal()} />
          </Dialog.Sidebar>
        )}
      </AnimatePresence>
    </Dialog>
  );
}

const menuSidebar = tv({
  slots: {
    button: '',
    icon: 'w-8',
    mainMenu: 'flex-col gap-4',
    contactModal: 'mt-auto',
  },
  variants: {
    isLight: {
      true: {
        button: 'text-white',
      },
    },
  },
});
