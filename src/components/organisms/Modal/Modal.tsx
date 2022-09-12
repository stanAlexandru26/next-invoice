import * as Dialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';
import { useContext } from 'react';

import { ModalContext } from '@/provider/ModalProvider';

import { ContentWrapper, StyledDialogPanel } from './Modal.styles';

type ModalProps = {
  children: ReactNode;
};

function InvoiceModal({ children }: ModalProps) {
  const { closeModal, modalState } = useContext(ModalContext);

  return (
    <Dialog.Root open={modalState} onOpenChange={() => closeModal()}>
      <StyledDialogPanel>
        <ContentWrapper>{children}</ContentWrapper>
      </StyledDialogPanel>
    </Dialog.Root>
  );
}
export default InvoiceModal;
