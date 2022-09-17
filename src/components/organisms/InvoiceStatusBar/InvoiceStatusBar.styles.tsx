import styled from 'styled-components';

import { ContentWrapper } from '@/components/molecules/ContentWrapper/ContentWrapper';

export const Wrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.breakpoints.m} {
    padding: 1rem 2rem;
    margin-bottom: 1.5rem;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  gap: 1rem;
  @media ${({ theme }) => theme.breakpoints.m} {
    flex-grow: 0;
  }
`;
