import type { ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/globalStyles';
import type { Theme } from '@/styles/styled';
import { darkTheme, lightTheme } from '@/styles/themes';

type ThemeProviderProps = {
  children?: ReactNode;
};

interface ThemesContextInterface {
  theme: string;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemesContext = createContext<ThemesContextInterface>(
  {} as ThemesContextInterface
);
const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPref = window.localStorage.getItem('theme');
    if (typeof storedPref === 'string') {
      return storedPref;
    }
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia?.matches) {
      return 'dark';
    }
  }
  return 'light';
};

const ThemesProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark');

  return (
    <ThemesContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
