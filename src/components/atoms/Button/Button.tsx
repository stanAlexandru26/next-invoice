import styled, { css } from 'styled-components';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'danger' | 'bordered';
};

export const Button = styled.button<ButtonProps>`
  padding: 1rem 1.5rem;
  border-radius: 999px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: 0.2s background-color, 0.2s box-shadow, 0.2s color;
  text-decoration: none;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          color: white;
          background-color: ${({ theme }) => theme.colors.primary[500]};

          &:hover,
          &:focus-visible {
            outline: none;
            background-color: ${({ theme }) => theme.colors.primary[300]};
          }
        `;

      case 'secondary':
        return css`
          color: ${({ theme }) => theme.colors.neutral[600]};
          background-color: ${({ theme }) => theme.colors.neutral[200]};

          &:hover,
          &:focus-visible {
            outline: none;
            background-color: ${({ theme }) => theme.colors.neutral[300]};
          }
        `;

      case 'danger':
        return css`
          color: white;
          background-color: ${({ theme }) => theme.colors.danger[500]};

          &:hover,
          &:focus-visible {
            outline: none;
            background-color: ${({ theme }) => theme.colors.danger[300]};
          }
        `;

      case 'bordered':
        return css`
          color: ${({ theme }) => theme.colors.neutral[500]};
          box-shadow: inset 0 0 0 1px
            ${({ theme }) => theme.colors.neutral[300]};
          background-color: transparent;

          &:hover,
          &:focus-visible {
            outline: none;
            color: ${({ theme }) => theme.colors.neutral[900]};
            box-shadow: inset 0 0 0 1px
              ${({ theme }) => theme.colors.primary[500]};
          }
        `;
      default: {
        return null;
      }
    }
  }}
`;
