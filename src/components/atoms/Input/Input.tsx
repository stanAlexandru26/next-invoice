import styled, { css } from 'styled-components';

type Props = {
  error?: string;
  isTransparent?: boolean;
};

export const Input = styled.input<Props>`
  padding: 16px 20px;
  height: 48px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  caret-color: ${({ theme }) => theme.colors.primary[500]};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[900]};
    opacity: 0.6;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.colors.danger[500]};
    `}

  ${({ isTransparent }) =>
    isTransparent &&
    css`
      padding: 0;
      border: none;
      background-color: transparent;
    `}
`;
