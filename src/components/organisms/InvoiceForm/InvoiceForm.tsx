import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { add } from 'date-fns';
import type { User } from 'firebase/auth';
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { Button } from '@/components/atoms/Button/Button';
import { ErrorSpan } from '@/components/atoms/ErrorSpan/ErrorSpan';
import LabeledInput from '@/components/molecules/LabeledInput/LabeledInput';
import { addInvoice } from '@/helpers/firebaseHelpers';
import { ModalContext } from '@/provider/ModalProvider';
import type { Invoice } from '@/types/Invoice';
import DeleteIcon from '~/svg/icon-delete.svg';

import {
  Controls,
  DeleteButton,
  FormWrapper,
  FromFieldset,
  GridCell,
  ItemsFieldset,
  StyledButton,
  ToFieldset,
} from './InvoiceForm.styles';
import InvoiceSchema from './InvoiceSchema';

type InvoiceFormProps = {
  user?: User | null;
};

function InvoiceForm({ user }: InvoiceFormProps) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Invoice>({
    resolver: zodResolver(InvoiceSchema),
    mode: 'onSubmit',
    defaultValues: {
      createdAt: new Date(),
    },
  });

  const { closeModal } = useContext(ModalContext);
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'items',
  });

  const watchItems = watch('items');
  const watchDate = watch('createdAt');
  const watchPaymentTerms = watch('paymentTerms');

  if (watchDate && watchPaymentTerms) {
    const date = getValues('createdAt');
    // @ts-ignore:next-line
    const paymentDate = add(date, { days: watchPaymentTerms });

    // const translateDate = paymentDate.toLocaleDateString('en-GB');
    setValue('paymentDue', paymentDate);
  }
  const handleOnDraft = () => {
    const data: Invoice = getValues();
    setValue('status', 'draft');
    addInvoice(data);
    console.log('did the draft');

    closeModal();
  };
  const handleOnSave = (data: Invoice) => {
    setValue('status', 'pending');
    addInvoice(data);
    console.log('did the submit');

    closeModal();
  };
  if (watchItems) {
    const itemsArray = getValues('items');

    const sum = itemsArray.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);
    setValue('total', sum);
  }

  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchItems[index],
    };
  });
  return (
    <>
      <FormWrapper>
        <form onSubmit={handleSubmit(handleOnSave)}>
          <input type='hidden' {...register('id')} defaultValue={nanoid(10)} />
          <input
            type='hidden'
            {...register('createdBy')}
            defaultValue={user?.uid}
          />
          <input type='hidden' {...register('total')} defaultValue={0} />
          <input
            type='hidden'
            {...register('status')}
            defaultValue={'pending'}
          />
          <input
            type='hidden'
            {...register('paymentDue', {
              valueAsDate: true,
            })}
          />

          <FromFieldset>
            <legend>Bill from</legend>
            <GridCell area='street'>
              <LabeledInput
                {...register('senderAddress.street')}
                error={errors.senderAddress?.street?.message}
                label='Street address'
              />
            </GridCell>
            <GridCell area='city'>
              <LabeledInput
                {...register('senderAddress.city')}
                error={errors.senderAddress?.city?.message}
                label='City'
              />
            </GridCell>

            <GridCell area='post'>
              <LabeledInput
                {...register('senderAddress.postCode')}
                error={errors.senderAddress?.postCode?.message}
                label='Post Code'
              />
            </GridCell>
            <GridCell area='country'>
              <LabeledInput
                {...register('senderAddress.country')}
                error={errors.senderAddress?.country?.message}
                label='Country'
              />
            </GridCell>
          </FromFieldset>
          <ToFieldset>
            <legend>Bill to</legend>
            <GridCell area='name'>
              <LabeledInput
                {...register('clientName')}
                error={errors.clientName?.message}
                label='Client Name'
              />
            </GridCell>
            <GridCell area='email'>
              <LabeledInput
                {...register('clientEmail')}
                error={errors.clientEmail?.message}
                label='Client Email'
              />
            </GridCell>
            <GridCell area='street'>
              <LabeledInput
                {...register('clientAddress.street')}
                error={errors.clientAddress?.street?.message}
                label='Street address'
              />
            </GridCell>
            <GridCell area='city'>
              <LabeledInput
                {...register('clientAddress.city')}
                error={errors.clientAddress?.city?.message}
                label='City'
              />
            </GridCell>

            <GridCell area='post'>
              <LabeledInput
                {...register('clientAddress.postCode')}
                error={errors.clientAddress?.postCode?.message}
                label='Post Code'
              />
            </GridCell>
            <GridCell area='country'>
              <LabeledInput
                {...register('clientAddress.country')}
                error={errors.clientAddress?.country?.message}
                label='Country'
              />
            </GridCell>
            <GridCell area='invoice'>
              <LabeledInput
                {...register('createdAt', {
                  valueAsDate: true,
                })}
                error={errors.createdAt?.message}
                label='Invoice Date'
                type='date'
              />
            </GridCell>

            <GridCell area='payment'>
              <select
                {...register('paymentTerms', {
                  valueAsNumber: true,
                })}
              >
                <option value={1}>1</option>
                <option value={7}>7</option>
                <option value={14}>14</option>
                <option value={30}>30</option>
              </select>
            </GridCell>

            <GridCell area='project'>
              <LabeledInput
                {...register('description')}
                error={errors.description?.message}
                label='Project Description'
              />
            </GridCell>
          </ToFieldset>

          <ItemsFieldset>
            <legend>Item List</legend>
            <ul>
              {controlledFields.map((item, index) => (
                <li key={item.id}>
                  <GridCell area='name'>
                    <LabeledInput
                      {...register(`items.${index}.name` as const)}
                      error={errors.items?.[index]?.name?.message}
                      label='Item Name'
                    />
                  </GridCell>
                  <GridCell area='qty'>
                    <LabeledInput
                      {...register(`items.${index}.quantity` as const, {
                        valueAsNumber: true,
                        onChange: (e) =>
                          setValue(
                            `items.${index}.total`,
                            +(e.target.value * item.price || 0).toFixed(2)
                          ),
                      })}
                      error={errors.items?.[index]?.quantity?.message}
                      label='Qty'
                      min='0'
                      type='number'
                      defaultValue={0}
                    />
                  </GridCell>
                  <GridCell area='price'>
                    <LabeledInput
                      {...register(`items.${index}.price` as const, {
                        valueAsNumber: true,
                        onChange: (e) => {
                          setValue(
                            `items.${index}.total`,
                            +(e.target.value * item.quantity || 0).toFixed(2)
                          );
                        },
                      })}
                      error={errors.items?.[index]?.price?.message}
                      label='Price'
                      type='number'
                      defaultValue={0}
                      min='0'
                      step='0.01'
                    />
                  </GridCell>

                  <GridCell area='total'>
                    <LabeledInput
                      label='Total'
                      {...register(`items.${index}.total` as const, {
                        valueAsNumber: true,
                      })}
                      readOnly
                      isTransparent
                      defaultValue={0}
                    />
                  </GridCell>
                  <GridCell area='btn'>
                    <DeleteButton
                      type='button'
                      aria-label='Delete item'
                      onClick={() => remove(index)}
                    >
                      <DeleteIcon />
                    </DeleteButton>
                  </GridCell>
                </li>
              ))}
            </ul>

            <Button
              type='button'
              variant='secondary'
              onClick={() =>
                append({ name: '', quantity: 0, price: 0, total: 0 })
              }
            >
              Add item
            </Button>
            <ErrorSpan>{(errors.items as any)?.message}</ErrorSpan>
          </ItemsFieldset>
          <Controls>
            <StyledButton
              type='button'
              variant='bordered'
              onClick={() => closeModal()}
            >
              Discard
            </StyledButton>
            <Button variant='secondary' onClick={() => handleOnDraft()}>
              save as draft
            </Button>

            <Button variant='primary' type='submit'>
              save & send
            </Button>
          </Controls>
        </form>
      </FormWrapper>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
}

export default InvoiceForm;
