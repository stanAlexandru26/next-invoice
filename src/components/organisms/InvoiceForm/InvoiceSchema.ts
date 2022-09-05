import { z } from 'zod';

const dateSchema = z.preprocess((arg) => {
  if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
}, z.date());
type DateSchema = z.infer<typeof dateSchema>;

export const statusSchema = z.enum(['paid', 'pending', 'draft']);

export const paymentTermsSchema = z.union([
  z.literal(1),
  z.literal(7),
  z.literal(14),
  z.literal(30),
]);
export const checkedStatusSchema = z.object({
  id: z.number(),
  text: z.string(),
  name: statusSchema,
  checked: z.boolean(),
});

export const addressSchema = z.object({
  street: z.string().min(3, { message: 'Can not be empty' }),
  city: z.string().min(3, { message: 'Can not be empty' }),
  postCode: z.string().min(3, { message: 'Can not be empty' }),
  country: z.string().min(3, { message: 'Can not be empty' }),
});
export const itemSchema = z.object({
  name: z.string().min(3, { message: 'Can not be empty' }),
  quantity: z.number(),
  price: z.number(),
  total: z.number(),
});
const InvoiceSchema = z.object({
  id: z.string(),
  createdAt: z.string().min(6, { message: 'Please select a date and time' }),
  createdBy: dateSchema,
  timestamp: dateSchema.optional(),
  clientName: z.string().min(6, { message: 'Can not be empty' }),
  clientEmail: z.string().email({ message: 'Please enter a valid email' }),
  clientAddress: addressSchema,
  senderAddress: addressSchema,
  paymentTerms: z.number(),
  status: statusSchema,
  description: z.string().min(3, { message: 'Can not be empty' }),
  items: itemSchema.array().nonempty(),
  total: z.number(),
});
export default InvoiceSchema;
