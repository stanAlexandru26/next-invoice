import styled from 'styled-components';

import Badge from '@/components/atoms/Badge/Badge';
import { Id } from '@/components/atoms/Id/Id';

export const Wrapper = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  display: grid;
  grid-template-rows: auto repeat(3, 1.5rem);
  grid-template-areas:
    'id client'
    '... ...'
    'date badge'
    'amount badge';
  justify-content: space-between;
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.1);

  @media ${({ theme }) => theme.breakpoints.m} {
    padding: 1rem 1.5rem;
    grid-template-rows: auto;
    align-items: center;
    grid-auto-flow: column;
    justify-content: start;
    grid-template-columns: 5.5rem 10rem 1fr auto auto;
    grid-template-areas: 'id date client amount badge';
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    padding: 1rem 1.5rem 1rem 2rem;
  }
`;

export const StyledId = styled(Id)`
  grid-area: id;
`;

export const DateSpan = styled.span`
  grid-area: date;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const AmountSpan = styled.span`
  grid-area: amount;
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: 700;
`;

export const ClientSpan = styled.span`
  grid-area: client;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

export const StyledBadge = styled(Badge)`
  grid-area: badge;
  align-self: center;

  @media ${({ theme }) => theme.breakpoints.m} {
    margin-left: 2.5rem;
    margin-right: 1.25rem;
  }
`;
