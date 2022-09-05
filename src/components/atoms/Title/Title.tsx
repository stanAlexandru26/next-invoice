import styled from 'styled-components';

import { typography } from '@/styles/typography';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutral[900]};
  ${typography.l};

  @media ${({ theme }) => theme.breakpoints.m} {
    ${typography.xxl}
  }
`;
