import '../firebase';

import type { AppProps } from 'next/app';

import AuthProvider from '@/provider/AuthProvider';
import ThemesProvider from '@/provider/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemesProvider>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </ThemesProvider>
);

export default MyApp;
