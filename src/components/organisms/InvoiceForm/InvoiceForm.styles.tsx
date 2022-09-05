import styled from 'styled-components';

import { Button } from '@/components/atoms/Button/Button';
import { ErrorSpan } from '@/components/atoms/ErrorSpan/ErrorSpan';
import { TransparentButton } from '@/components/atoms/TransparentButton/TransparentButton';

export const FormWrapper = styled.div`
  padding: 1.5rem 0px 1.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.neutral[900]};
  height: 100%;

  @media ${({ theme }) => theme.breakpoints.m} {
    padding: 3.5rem 2rem 3.5rem 3.5rem;
  }

  h2 {
    margin-bottom: 1.5rem;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.neutral[900]};
  }

  form {
    height: calc(100% - 4rem);
    padding-right: 1.5rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 2rem;

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.neutral[300]};
      border-radius: 0.25rem;
    }
  }
`;

export const StyledFieldset = styled.fieldset`
  border: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.m} {
    grid-template-columns: repeat(6, 1fr);
  }

  legend {
    margin-bottom: 1.5rem;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.primary[700]};
    font-weight: 700;
  }
`;

export const FromFieldset = styled(StyledFieldset)`
  grid-template-areas:
    'street street '
    'city  post'
    'country country';

  @media ${({ theme }) => theme.breakpoints.m} {
    grid-template-areas:
      'street street street street street street'
      'city city post post country country';
  }
`;
export const ToFieldset = styled(StyledFieldset)`
  grid-template-areas:
    'name name '
    'email email'
    'street street'
    'city  post'
    'country country'
    'invoice invoice'
    'payment payment'
    'project project';

  @media ${({ theme }) => theme.breakpoints.m} {
    grid-template-areas:
      'name name name name name name'
      'email email email email email email'
      'street street street street street street'
      'city city post post country country'
      'invoice invoice invoice payment payment payment'
      'project project project project project project';
  }
`;

type GridCellProps = {
  area: string;
};

export const GridCell = styled.div<GridCellProps>`
  grid-area: ${({ area }) => area};
`;

export const ItemsFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;

  legend {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 700;
  }

  li {
    margin-bottom: 3rem;
    display: grid;
    grid-template-areas:
      'name name name name'
      'qty price total btn';
    grid-template-columns: minmax(3.75rem, 1fr) minmax(5rem, 1fr) 1fr auto;
    align-items: end;
    gap: 24px 16px;

    @media ${({ theme }) => theme.breakpoints.m} {
      grid-template-areas: 'name qty price total btn';
      grid-template-columns: 1fr 5rem 6.25rem 5rem auto;
      margin-bottom: 1rem;
    }
  }

  > ${ErrorSpan} {
    margin-top: 2rem;
  }
`;

export const DeleteButton = styled(TransparentButton)`
  height: 3rem;
  display: flex;
  align-items: center;
  fill: ${({ theme }) => theme.colors.neutral[400]};

  &:hover {
    fill: ${({ theme }) => theme.colors.danger[500]};
  }
`;

export const Controls = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.m} {
    padding: 2rem 3.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    left: 6.5rem;
  } ;
`;

export const StyledButton = styled(Button)`
  margin-right: auto;
`;
