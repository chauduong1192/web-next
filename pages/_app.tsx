import React from 'react';

import { appWithTranslation } from '@i18nnext';
import App from 'next/app';
import Router from 'next/router';

import Head from '@components/Head';
import NProgress from 'nprogress';

import { Provider } from 'react-redux';
import configureStore from '@redux/store';

import { isServer, getStoreBetweenPageTransitions, persistStoreBetweenPageTransitions } from '@utils';

import 'bootstrap/dist/css/bootstrap.min.css';

const getOrInitReduxStore = (props) => {
  const { store } = props;
  if (store && store.dispatch) {
    return store;
  }

  return configureStore(props.initialState);
};

const hookIntoRouterCallbacks = () => {
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();
};

class MyApp extends App<any, any> {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const store = isServer() ? configureStore() : getStoreBetweenPageTransitions();
    let storeRequiredData;

    storeRequiredData = {
      store,
    };

    storeRequiredData.initialState = store.getState();

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ...ctx, ...storeRequiredData,
      });
    }

    return {
      // expose props from the component (allowing custom app behavior)
      pageProps,
      // expose redux store data
      ...storeRequiredData,
    };

  }
  public state = {
    store: getOrInitReduxStore(this.props),
  };

  public componentDidMount() {
    // handle ngpress
    hookIntoRouterCallbacks();

    persistStoreBetweenPageTransitions(this.state.store);
  }
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={this.state.store}>
          <Head />
          <Component {...pageProps} store={this.state.store} />
      </Provider>
    );
  }
}

export default appWithTranslation(MyApp);
