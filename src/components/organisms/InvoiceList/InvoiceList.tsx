import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

import EmptyList from '@/components/molecules/EmptyList/EmptyList';
import InvoiceCard from '@/components/molecules/InvoiceCard/InvoiceCard';
import type { Invoice } from '@/types/Invoice';

import { StyledUl } from './InvoiceList.styles';

type InvoiceListProps = {
  invoices: Invoice[];
};

const listVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const InvoiceList = ({ invoices }: InvoiceListProps) => {
  return (
    <>
      {invoices?.length ? (
        <StyledUl
          variants={listVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          {invoices.map((invoice: Invoice) => {
            return (
              <motion.li key={invoice.id} variants={itemVariants}>
                <InvoiceCard invoice={invoice} />
              </motion.li>
            );
          })}
        </StyledUl>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default InvoiceList;
