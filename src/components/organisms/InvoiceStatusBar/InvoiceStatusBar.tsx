import Badge from '@/components/atoms/Badge/Badge';
import { Text } from '@/components/atoms/Text/Text';
import InvoiceController from '@/components/molecules/InvoiceController/InvoiceControllers';
import type { Status } from '@/types/Invoice';

import { StatusWrapper, Wrapper } from './InvoiceStatusBar.styles';

type StatusBarProps = {
  status: Status;
  documentId: string;
};

const InvoiceStatusBar = ({ status, documentId }: StatusBarProps) => {
  return (
    <Wrapper>
      <StatusWrapper>
        <Text>Status</Text>
        <Badge variant={status} />
      </StatusWrapper>
      <InvoiceController status={status} documentId={documentId} />
    </Wrapper>
  );
};

export default InvoiceStatusBar;
