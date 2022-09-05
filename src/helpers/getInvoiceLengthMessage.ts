export function getInvoiceLengthMessage(length: number) {
  let message: string;
  switch (length) {
    case undefined || 0:
      message = 'No invoices';
      break;
    case 1:
      message = `There is ${length} invoice in total`;
      break;
    default:
      message = `There are ${length} invoices in total`;
  }

  return message;
}
