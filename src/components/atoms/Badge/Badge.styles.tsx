import styled, { css } from 'styled-components';

import type { BadgeProps } from './Badge';

export const Wrapper = styled.div<BadgeProps>`
  width: 7rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  text-transform: capitalize;

  ${({ variant }) => {
    switch (variant) {
      case 'draft':
        return css`
          background-color: ${({ theme }) => theme.colors.neutral[200]};
          color: ${({ theme }) => theme.colors.neutral[600]};
          span {
            background-color: ${({ theme }) => theme.colors.neutral[600]};
          }
        `;

      case 'paid':
        return css`
          background-color: ${({ theme }) => theme.colors.success[100]};
          color: ${({ theme }) => theme.colors.success[900]};
          span {
            background-color: ${({ theme }) => theme.colors.success[900]};
          }
        `;

      case 'pending':
        return css`
          background-color: ${({ theme }) => theme.colors.warning[100]};
          color: ${({ theme }) => theme.colors.warning[900]};
          span {
            background-color: ${({ theme }) => theme.colors.warning[900]};
          }
        `;
      default: {
        return null;
      }
    }
  }}

  span {
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
  }
`;
