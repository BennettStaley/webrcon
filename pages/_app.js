import React from 'react';

import App, { Container } from 'next/app';

import { ThemeProvider } from '@material-ui/styles';

import theme from '../constants/theme';
import DrawerAndAppWrapper from '../containers/DrawerAndNavWrapper';

class MuiApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <DrawerAndAppWrapper>
            <Component {...pageProps} />
          </DrawerAndAppWrapper>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MuiApp;
