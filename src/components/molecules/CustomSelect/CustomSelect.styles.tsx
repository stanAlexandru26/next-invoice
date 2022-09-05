import Select from 'react-select';
import styled from 'styled-components';

export const StyledSelect = styled(Select)`
  .react-select__control {
    border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.neutral[900]};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 700;
    box-shadow: none;

    &:hover,
    &.react-select__control--is-focused {
      border: 1px solid ${({ theme }) => theme.colors.primary[500]};
    }

    .react-select__value-container {
      color: ${({ theme }) => theme.colors.neutral[900]};
      padding: 1rem;
    }

    .react-select__indicator-separator {
      display: none;
    }

    .react-select__indicator {
      padding: 0 1rem;
      svg {
        fill: ${({ theme }) => theme.colors.primary[500]};
      }
    }

    .react-select__single-value {
      margin: 0;
      color: ${({ theme }) => theme.colors.neutral[900]};
    }
  }

  .react-select__menu {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    border-radius: 0.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutral[900]};

    .react-select__menu-list {
      padding: 0;
    }

    .react-select__option {
      padding: 1rem 1.5rem;
      background-color: transparent;

      &.react-select__option--is-selected {
        color: ${({ theme }) => theme.colors.primary[500]};
      }

      &.react-select__option--is-focused {
        color: ${({ theme }) => theme.colors.primary[700]};
      }

      &:not(:last-of-type) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[300]};
      }
    }
  }
`;
