import '../firebase';

import type { AppProps } from 'next/app';

import MainTemplate from '@/components/templates/MainTemplate/MainTemplate';
import AuthProvider from '@/provider/AuthProvider';
import ModalProvider from '@/provider/ModalProvider';
import ThemesProvider from '@/provider/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemesProvider>
    <AuthProvider>
      <ModalProvider>
        <MainTemplate>
          <Component {...pageProps} />
        </MainTemplate>
      </ModalProvider>
    </AuthProvider>
  </ThemesProvider>
);

export default MyApp;
