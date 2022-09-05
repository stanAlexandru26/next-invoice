import styled from 'styled-components';

import { Text } from '@/components/atoms/Text/Text';
import { typography } from '@/styles/typography';

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  svg {
    margin-bottom: 2.5rem;

    @media ${({ theme }) => theme.breakpoints.m} {
      margin-bottom: 4rem;
    }
  }

  h2 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.neutral[900]};
    ${typography.l}
  }

  ${Text} {
    max-width: 15rem;
  }
`;
