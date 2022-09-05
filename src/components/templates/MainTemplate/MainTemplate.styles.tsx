import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.l} {
    flex-direction: unset;
    width: 100%;
  }
`;
export const LayoutContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  @media ${({ theme }) => theme.breakpoints.l} {
    flex-direction: unset;
    width: 100%;
  }
`;
