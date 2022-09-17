import { useContext } from 'react';
import styled from 'styled-components';
import superjson from 'superjson';

import InvoiceDetailed from '@/components/organisms/InvoiceDetailed/InvoiceDetailed';
import InvoiceForm from '@/components/organisms/InvoiceForm/InvoiceForm';
import InvoiceStatusBar from '@/components/organisms/InvoiceStatusBar/InvoiceStatusBar';
import InvoiceModal from '@/components/organisms/Modal/Modal';
import { getInvoice } from '@/helpers/firebaseHelpers';
import { AuthContext } from '@/provider/AuthProvider';
import type { Invoice } from '@/types/Invoice';

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 45rem;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.m} {
    margin-top: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.l} {
    margin-top: 4rem;
  }
`;

export const ControllerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
`;
type SingleInvoiceProps = {
  serializedInvoice: Invoice;
};

function SingleInvoice({ serializedInvoice }: SingleInvoiceProps) {
  // @ts-ignore

  const invoice: Invoice = superjson.deserialize(serializedInvoice);
  const { user } = useContext(AuthContext);

  return (
    <Wrapper>
      <>
        <InvoiceStatusBar
          status={invoice.status}
          documentId={invoice.documentId}
        />
        <InvoiceDetailed invoice={invoice} />
        <InvoiceModal>
          <InvoiceForm user={user} invoice={invoice} />
        </InvoiceModal>
      </>
    </Wrapper>
  );
}

export default SingleInvoice;
export const getServerSideProps = async (context: { params: { id: any } }) => {
  const { id } = context.params!;
  const firebaseInvoice = await getInvoice(id);
  const serializedInvoice = superjson.serialize(firebaseInvoice);

  return {
    props: {
      serializedInvoice,
    },
  };
};
