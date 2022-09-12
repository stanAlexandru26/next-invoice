export type Status = 'paid' | 'pending' | 'draft';

export type PaymentTerms = 1 | 7 | 14 | 30;

export interface CheckedStatus {
  id: number;
  text: string;
  name: Status;
  checked: boolean;
}

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}
export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Invoice {
  id: string;
  createdAt: Date;
  createdBy?: string;
  documentId?: string;
  paymentDue: Date;
  paymentTerms: PaymentTerms;
  description: string;
  clientName: string;
  clientEmail: string;
  status: Status;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}
