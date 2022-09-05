import * as Dialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';

import { ContentWrapper, SyledDialogPanel } from './Modal.styles';

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: (isOpen: boolean) => void;
};

function InvoiceModal({ isOpen, children, setIsOpen }: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <SyledDialogPanel>
        <ContentWrapper>{children}</ContentWrapper>
      </SyledDialogPanel>
    </Dialog.Root>
  );
}
export default InvoiceModal;
