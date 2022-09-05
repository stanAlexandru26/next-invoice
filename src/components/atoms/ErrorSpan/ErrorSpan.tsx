import styled from 'styled-components';

export const ErrorSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.danger[700]};
`;
