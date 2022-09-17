import { useContext } from 'react';

import { Button } from '@/components/atoms/Button/Button';
import { deleteInvoice, markAsPaid } from '@/helpers/firebaseHelpers';
import { ModalContext } from '@/provider/ModalProvider';
import type { Status } from '@/types/Invoice';

import { Wrapper } from './InvoiceController.styles';

type InvoiceControllerProps = {
  status: Status;
  documentId: string;
};

const InvoiceController = ({ status, documentId }: InvoiceControllerProps) => {
  const { openModal } = useContext(ModalContext);

  return (
    <Wrapper>
      {status !== 'paid' && (
        <Button variant='secondary' onClick={() => openModal()}>
          Edit
        </Button>
      )}
      <Button variant='danger' onClick={() => deleteInvoice(documentId)}>
        Delete
      </Button>
      {status === 'pending' && (
        <Button variant='primary' onClick={() => markAsPaid(documentId)}>
          Mark as Paid
        </Button>
      )}
    </Wrapper>
  );
};

export default InvoiceController;
