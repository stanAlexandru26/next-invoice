import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';

import { db } from '@/firebase';
import type { Invoice } from '@/types/Invoice';

export const getInvoices = async (uid: string | null) => {
  const invoicesCollection = collection(db, 'invoices');

  const invoiceSnapshot = await getDocs(
    query(invoicesCollection, where('createdBy', '==', uid))
  );

  return invoiceSnapshot.docs.map((invoice) => ({
    ...invoice.data(),
    documentId: invoice.id,
    createdAt: invoice.data().createdAt.toDate(),
    paymentDue: invoice.data().paymentDue.toDate(),
  }));
};
export const getInvoice = async (uid: string) => {
  const docRef = doc(db, 'invoices', uid);
  const invoice = await getDoc(docRef);
  if (!invoice.exists()) {
    return null;
  }
  return {
    ...invoice.data(),
    documentId: invoice.id,
    createdAt: invoice.data().createdAt.toDate(),
    paymentDue: invoice.data().paymentDue.toDate(),
  };
};

export const addInvoice = async (data: Invoice) => {
  const invoicesCollection = doc(db, 'invoices', data.id);

  await setDoc(invoicesCollection, data);
};

export const editInvoice = async (data: any) => {
  const invoiceRef = doc(db, 'invoices', data.documentId);
  await updateDoc(invoiceRef, data);
};

export const deleteInvoice = async (documentId: string) => {
  await deleteDoc(doc(db, 'invoices', documentId));
};
