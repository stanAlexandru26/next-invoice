import styled, { css } from 'styled-components';

import { ErrorSpan } from '@/components/atoms/ErrorSpan/ErrorSpan';

type LabelProps = {
  error?: string;
};

export const StyledLabel = styled.label<LabelProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.neutral[600]};

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.danger[700]};
    `}
`;

export const LabelWrapper = styled.span`
  display: flex;
  gap: 1rem;
  align-items: baseline;
  justify-content: space-between;

  ${ErrorSpan} {
    text-align: right;
  }
`;
