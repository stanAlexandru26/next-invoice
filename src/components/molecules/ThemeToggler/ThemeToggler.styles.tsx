import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledLabel = styled.label`
  width: 2rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: ${({ theme }) =>
    theme.mode === 'light' ? 'flex-end' : 'flex-start'};
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.neutral[400]};
    transition: fill 0.2s;
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.primary[500]};
  }

  input {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  input:focus-visible ~ * svg {
    fill: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const IconsWrapper = styled(motion.span)`
  width: 500%;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;

  span {
    width: 30px;
    display: flex;
    justify-content: center;
  }
`;
