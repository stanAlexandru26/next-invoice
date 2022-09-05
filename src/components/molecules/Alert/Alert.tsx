import type { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type AlertProps = {
  variant: 'success' | 'warning' | 'danger';
  isBold?: boolean;
  children?: ReactNode;
};

export const Alert = styled.div<AlertProps>`
  padding: 1rem 2.5rem;
  max-width: 45rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme, variant }) => theme.colors[variant][500]};
  background-color: ${({ theme, variant }) => theme.colors[variant][100]};
  color: ${({ theme, variant }) => theme.colors[variant][900]};
  font-size: ${({ theme }) => theme.fontSize.s};

  ${({ isBold }) =>
    isBold &&
    css`
      font-weight: 700;
    `}
  text-align: center;
`;
