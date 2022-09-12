import { format } from 'date-fns';
import Link from 'next/link';

import { formatNumberToUSD } from '@/helpers/formatNumberToUSD';
import type { Invoice } from '@/types/Invoice';

import {
  AmountSpan,
  ClientSpan,
  DateSpan,
  StyledBadge,
  StyledId,
  Wrapper,
} from './InvoiceCard.styles';

type InvoiceCardProps = {
  invoice: Invoice;
};

const InvoiceCard = ({ invoice }: InvoiceCardProps) => {
  return (
    <Link href={`/invoice/${invoice.id}`}>
      <Wrapper>
        <StyledId>{invoice.id}</StyledId>
        <DateSpan>Due {format(invoice.paymentDue, 'c MMMM R')}</DateSpan>
        <ClientSpan>{invoice.clientName}</ClientSpan>
        <AmountSpan>{formatNumberToUSD(invoice.total)}</AmountSpan>
        <StyledBadge variant={invoice.status} />
      </Wrapper>
    </Link>
  );
};

export default InvoiceCard;
