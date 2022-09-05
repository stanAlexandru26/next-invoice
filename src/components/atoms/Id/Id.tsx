import styled from 'styled-components';

export const Id = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: 700;

  &::before {
    content: '#';
    color: ${({ theme }) => theme.colors.primary[300]};
  }
`;
