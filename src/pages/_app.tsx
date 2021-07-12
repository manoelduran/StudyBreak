import '../styles/global.scss';
import { AppProps } from 'next/app';
import React from 'react';
import { ChallengesContextProvider } from '../contexts/ChallengesContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChallengesContextProvider>
          <Component {...pageProps} />
      </ChallengesContextProvider>
    </>
  );
}

export default MyApp
