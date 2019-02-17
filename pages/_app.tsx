import React from 'react';

import { appWithTranslation } from '@app/i18nnext';
import App, { Container } from 'next/app';
import Head from '@app/components/Head';

class MyApp extends App<any, any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
        <Container>
            <Head />
            <Component {...pageProps} />
        </Container>
    );
  }
}

export default appWithTranslation(MyApp);
