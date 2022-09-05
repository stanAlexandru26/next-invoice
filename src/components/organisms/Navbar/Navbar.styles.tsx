import styled from 'styled-components';

import { darkTheme } from '@/styles/themes';

export const Wrapper = styled.aside`
  background-color: ${({ theme }) => theme.colors.neutral[800]};
  position: sticky;
  top: 0;
  z-index: 99999;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.l} {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 6.5rem;
    border-radius: 0 1rem 1rem 0;
  } ;
`;

export const Panel = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.l} {
    height: unset;
    width: 100%;
    flex-direction: column;
  } ;
`;

export const LogoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.primary[500]};

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 0%;
    width: 100%;
    height: 50%;
    border-top-left-radius: 1.25rem;
    background-color: ${darkTheme.colors.primary[700]};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.m} {
    width: 5rem;
    height: 5rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media ${({ theme }) => theme.breakpoints.l} {
    width: 6.5rem;
    height: 6.5rem;

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export const UserWrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  border-left: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  color: ${({ theme }) => theme.colors.neutral[400]};
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.m} {
    width: 5rem;
    height: 5rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media ${({ theme }) => theme.breakpoints.l} {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral[400]};
    border-left: 0;
    width: 6.5rem;
    height: 6.5rem;

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
