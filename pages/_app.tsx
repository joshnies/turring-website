import type { AppProps } from 'next/app';
import '@fontsource/poppins';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider themeType="light">
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
export default MyApp;
