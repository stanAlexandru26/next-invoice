import Link from 'next/link';

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
        <DateSpan> Due {invoice.paymentDue}</DateSpan>
        <ClientSpan>{invoice.clientName}</ClientSpan>
        <AmountSpan>{invoice.total}</AmountSpan>
        <StyledBadge variant={invoice.status} />
      </Wrapper>
    </Link>
  );
};

export default InvoiceCard;
