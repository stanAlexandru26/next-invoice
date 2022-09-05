import 'styled-components';

export type Theme = 'light' | 'dark';
declare module 'styled-components' {
  export interface DefaultTheme {
    mode: Theme;

    breakpoints: {
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    fontSize: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };

    colors: {
      primary: {
        300: string;
        500: string;
        700: string;
      };
      neutral: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      success: {
        100: string;
        300: string;
        500: string;
        700: string;
        900: string;
      };
      warning: {
        100: string;
        300: string;
        500: string;
        700: string;
        900: string;
      };
      danger: {
        100: string;
        300: string;
        500: string;
        700: string;
        900: string;
      };
    };
  }
}
