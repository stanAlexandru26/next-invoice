import React from 'react';

import type { Invoice } from '@/types/Invoice';

import {
  DatesWrapper,
  Heading,
  InfoText,
  InfoWrapper,
  ItemHeader,
  ItemsWrapper,
  ItemText,
  ItemWrapper,
  MiddleWrapper,
  PrimaryInfo,
  SentTo,
  StyledId,
  TopWrapper,
  TotalHeading,
  TotalText,
  TotalWrapper,
  Wrapper,
} from './InvoiceDetailed.style';

type InvoiceDetailedProps = {
  invoice: Invoice;
};

const InvoiceDetailed = ({ invoice }: InvoiceDetailedProps) => {
  return (
    <Wrapper>
      <TopWrapper>
        <InfoWrapper smallGap as='hgroup'>
          <StyledId as='h1'>{invoice.id}</StyledId>
          <Heading as='h2'>Graphic Design</Heading>
        </InfoWrapper>

        <div>
          <InfoText>{invoice.senderAddress.street}</InfoText>
          <InfoText>{invoice.senderAddress.city}</InfoText>
          <InfoText>{invoice.senderAddress.postCode}</InfoText>
          <InfoText>{invoice.senderAddress.country}</InfoText>
        </div>
      </TopWrapper>

      <MiddleWrapper>
        <DatesWrapper>
          <InfoWrapper>
            <Heading>Invoice Date</Heading>
            <PrimaryInfo>{invoice.createdAt}</PrimaryInfo>
          </InfoWrapper>

          <InfoWrapper>
            <Heading>Payment Due</Heading>
            <PrimaryInfo>{invoice.paymentDue}</PrimaryInfo>
          </InfoWrapper>
        </DatesWrapper>

        <InfoWrapper>
          <Heading>Bill to</Heading>
          <InfoWrapper smallGap>
            <PrimaryInfo>{invoice.clientName}</PrimaryInfo>
            <div>
              <InfoText>{invoice.clientAddress.street}</InfoText>
              <InfoText>{invoice.clientAddress.city}</InfoText>
              <InfoText>{invoice.clientAddress.postCode}</InfoText>
              <InfoText>{invoice.clientAddress.country}</InfoText>
            </div>
          </InfoWrapper>
        </InfoWrapper>

        <SentTo>
          <Heading>Sent to</Heading>
          <PrimaryInfo>{invoice.clientEmail}</PrimaryInfo>
        </SentTo>
      </MiddleWrapper>

      <ItemsWrapper>
        <ItemHeader>ItemName</ItemHeader>
        <ItemHeader align='center'>QTY.</ItemHeader>
        <ItemHeader align='right'>Price</ItemHeader>
        <ItemHeader align='right'>Total</ItemHeader>
        {invoice.items.map((item) => (
          <ItemWrapper key={item.name}>
            <InfoWrapper smallGap>
              <ItemText>{item.name}</ItemText>
              <InfoText isBold>
                {item.quantity} x {item.price}
              </InfoText>
            </InfoWrapper>
            <ItemText>{item.total}</ItemText>
          </ItemWrapper>
        ))}
      </ItemsWrapper>

      <TotalWrapper>
        <TotalHeading>Amount Due</TotalHeading>
        <TotalText>{invoice.total}</TotalText>
      </TotalWrapper>
    </Wrapper>
  );
};

export default InvoiceDetailed;
