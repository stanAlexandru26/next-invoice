import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledUl = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
