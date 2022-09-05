import { css } from 'styled-components';

export const typography = {
  xxs: css`
    font-size: ${({ theme }) => theme.fontSize.xxs};
    letter-spacing: -0.021em;
  `,
  xs: css`
    font-size: ${({ theme }) => theme.fontSize.xs};
    letter-spacing: -0.019em;
    line-height: 1.63;
  `,
  s: css`
    font-size: ${({ theme }) => theme.fontSize.s};
    letter-spacing: -0.02em;
    line-height: 1.25;
  `,
  m: css`
    font-size: ${({ theme }) => theme.fontSize.m};
    letter-spacing: -0.05em;
    line-height: 1.5;
  `,
  l: css`
    font-size: ${({ theme }) => theme.fontSize.l};
    letter-spacing: -0.0315em;
    line-height: 1.1;
  `,
  xl: css`
    font-size: ${({ theme }) => theme.fontSize.xl};
    letter-spacing: -0.02em;
    line-height: 1.33;
  `,
  xxl: css`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    letter-spacing: -0.03125em;
    line-height: 1.125;
  `,
};
