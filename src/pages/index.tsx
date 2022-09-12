import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Title } from '@/components/atoms/Title/Title';
import InvoiceForm from '@/components/organisms/InvoiceForm/InvoiceForm';
import InvoiceList from '@/components/organisms/InvoiceList/InvoiceList';
import InvoiceModal from '@/components/organisms/Modal/Modal';
import { getInvoices } from '@/helpers/firebaseHelpers';
import { getInvoiceLengthMessage } from '@/helpers/getInvoiceLengthMessage';
import { AuthContext } from '@/provider/AuthProvider';
import { ModalContext } from '@/provider/ModalProvider';

export const DashboardWrapper = styled.div`
  width: 100%;
  max-width: 48rem;
  height: 100%;
`;

export const Header = styled(motion.header)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const NewInvoiceButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  padding-right: 1rem;

  @media ${({ theme }) => theme.breakpoints.m} {
    gap: 1rem;
    padding: 0.5rem;
    padding-right: 1rem;
  }

  &::before {
    content: ${() => `url(/svg/icon-plus.svg)`};
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    border-radius: 50%;
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 1rem;
`;

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      ease: 'easeOut',
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeOut',
    },
  },
};
const Index = () => {
  const [invoices, setInvoices] = useState([]);
  const { user, isAuthLoading } = useContext(AuthContext);
  const router = useRouter();
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    if (!user && !isAuthLoading) {
      router.push('/signin');
    }
  }, [user, isAuthLoading]);

  useEffect(() => {
    const getInvoiceFunction = async () => {
      if (user?.uid) {
        const storeInvoices: any = await getInvoices(user.uid);
        return setInvoices(storeInvoices);
      }
      return false;
    };
    getInvoiceFunction();
  }, [user]);

  return (
    <>
      <DashboardWrapper>
        <Header
          variants={headerVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <div>
            <StyledTitle>Invoices</StyledTitle>
            <Text>{getInvoiceLengthMessage(invoices?.length)}</Text>
          </div>
          <InvoiceModal>
            <InvoiceForm user={user} />
          </InvoiceModal>
          <NewInvoiceButton variant='primary' onClick={() => openModal()}>
            New Invoice
          </NewInvoiceButton>
        </Header>

        <InvoiceList invoices={invoices} />
      </DashboardWrapper>
    </>
  );
};

export default Index;
