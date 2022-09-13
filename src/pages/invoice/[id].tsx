import superjson from 'superjson';

import InvoiceDetailed from '@/components/organisms/InvoiceDetailed/InvoiceDetailed';
import InvoiceModal from '@/components/organisms/Modal/Modal';
import { getInvoice } from '@/helpers/firebaseHelpers';
import type { Invoice } from '@/types/Invoice';
import InvoiceStatusBar from '@/components/organisms/InvoiceStatusBar/InvoiceStatusBar';

type SingleInvoiceProps = {
  serializedInvoice: Invoice;
};

function SingleInvoice({ serializedInvoice }: SingleInvoiceProps) {
  // @ts-ignore
  const invoice: Invoice = superjson.deserialize(serializedInvoice);
  return (
    <>
      <InvoiceStatusBar />
      <InvoiceDetailed invoice={invoice} />
      <InvoiceModal>{/* <InvoiceForm user={user} /> */}</InvoiceModal>
    </>
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
