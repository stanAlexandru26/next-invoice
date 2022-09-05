import { Button } from '@/components/atoms/Button/Button';
import type { Status } from '@/types/Invoice';

import { Wrapper } from './InvoiceController.styles';

type InvoiceControllerProps = {
  status: Status;
};

const InvoiceController = ({ status }: InvoiceControllerProps) => {
  return (
    <Wrapper>
      {status !== 'paid' && <Button variant='secondary'>Edit</Button>}
      <Button variant='danger'>Delete</Button>
      {status === 'pending' && <Button variant='primary'>Mark as Paid</Button>}
    </Wrapper>
  );
};

export default InvoiceController;
