import styled from 'styled-components';

import { Id } from '@/components/atoms/Id/Id';
import { Text } from '@/components/atoms/Text/Text';
import { ContentWrapper } from '@/components/molecules/ContentWrapper/ContentWrapper';
import { typography } from '@/styles/typography';

export const Wrapper = styled(ContentWrapper)`
  margin-bottom: 94px;
  @media ${({ theme }) => theme.breakpoints.m} {
    padding: 32px;
  }
  @media ${({ theme }) => theme.breakpoints.l} {
    padding: 48px;
  }
`;

export const StyledId = styled(Id)`
  @media ${({ theme }) => theme.breakpoints.m} {
    ${typography.m}
  }
`;

export const ItemsWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  @media ${({ theme }) => theme.breakpoints.m} {
    gap: 32px;
    padding: 32px 32px 40px;
    display: grid;
    grid-template-columns: 4fr 0.5fr 1fr 1fr;
  }
`;

type InfoWrapperProps = {
  smallGap?: boolean;
};

export const InfoWrapper = styled.div<InfoWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ smallGap }) => (smallGap ? '8px' : '12px')};
`;

export const SentTo = styled(InfoWrapper)`
  grid-column: 1/-1;
  @media ${({ theme }) => theme.breakpoints.m} {
    grid-column: unset;
  }
`;

export const Heading = styled.h3`
  ${typography.s}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

export const InfoText = styled(Text)`
  ${typography.xs}
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
  @media ${({ theme }) => theme.breakpoints.s} {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    ${InfoText} {
      text-align: right;
    }
  }
`;

export const MiddleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 32px;
  margin-bottom: 40px;
  @media ${({ theme }) => theme.breakpoints.m} {
    grid-template-columns: 1fr 1fr 1.5fr;
    margin-bottom: 48px;
  }
`;

export const DatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const PrimaryInfo = styled.p`
  ${typography.m};
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: 700;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type ItemCell = {
  align?: 'center' | 'right';
};

export const ItemHeader = styled.p<ItemCell>`
  ${typography.s};
  color: ${({ theme }) => theme.colors.neutral[600]};
  text-align: ${({ align }) => align || 'left'};
`;

export const ItemText = styled(Text)<ItemCell>`
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: 700;
  text-align: ${({ align }) => align || 'left'};
`;

export const TotalWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: ${({ theme }) => theme.colors.neutral[700]};
  @media ${({ theme }) => theme.breakpoints.m} {
    padding: 24px 32px;
  }
`;

export const TotalText = styled.p`
  color: #fff;
  font-weight: 700;
  ${typography.l}
  @media ${({ theme }) => theme.breakpoints.m} {
    ${typography.xl}
  }
`;

export const TotalHeading = styled(Heading)`
  color: #fff;
`;
