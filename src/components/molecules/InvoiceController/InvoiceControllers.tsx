import { Button } from '@/components/atoms/Button/Button';
import { deleteInvoice, markAsPaid } from '@/helpers/firebaseHelpers';
import type { Status } from '@/types/Invoice';

import { Wrapper } from './InvoiceController.styles';

type InvoiceControllerProps = {
  status: Status;
  documentId: string;
};

const InvoiceController = ({ status, documentId }: InvoiceControllerProps) => {
  return (
    <Wrapper>
      {status !== 'paid' && <Button variant='secondary'>Edit</Button>}
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
