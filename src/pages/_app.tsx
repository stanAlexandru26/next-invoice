import '../firebase';

import type { AppProps } from 'next/app';

import MainTemplate from '@/components/templates/MainTemplate/MainTemplate';
import AuthProvider from '@/provider/AuthProvider';
import ThemesProvider from '@/provider/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemesProvider>
    <AuthProvider>
      <MainTemplate>
        <Component {...pageProps} />
      </MainTemplate>
    </AuthProvider>
  </ThemesProvider>
);

export default MyApp;
