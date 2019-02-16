import { appWithTranslation } from '@app/i18nnext';
import App, { Container } from 'next/app';
import React from 'react';

class MyApp extends App<any, any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
        <Container>
            <Component {...pageProps} />
        </Container>
    );
  }
}

export default appWithTranslation(MyApp);
