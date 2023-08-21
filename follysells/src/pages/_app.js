import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../styles/createEmotionCache';
import theme from '../styles/theme';
// import Layout from '../components/shared/Layout';
import '../styles/globals.css';
import Layout from '@/component/shared/Layout';
import { AuthContextProvider } from '@/context/AuthProvider';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
    <AuthContextProvider>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
        <Component {...pageProps} />
        </Layout>
        </ThemeProvider>
    </AuthContextProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};