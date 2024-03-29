import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'

import { appWithTranslation } from '@i18nnext'
import Head from '@components/Head'
import { IAppProps, IStoreProps } from '@components/Types'

import { Provider } from 'react-redux'
import configureStore from '@redux/store'

import {
  isServer,
  getStoreBetweenPageTransitions,
  persistStoreBetweenPageTransitions,
} from '@utils/index'

export interface IAppState {
  store: Record<any, any>
}

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

import '@public/styles/index.css'

const getOrInitReduxStore = (props) => {
  const { store } = props
  if (store && store.dispatch) {
    return store
  }

  return configureStore(props.initialState)
}

const hookIntoRouterCallbacks = () => {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())
}

class MyApp extends App<IAppProps, IAppState> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    const store = isServer()
      ? configureStore()
      : getStoreBetweenPageTransitions()

    const storeRequiredData: IStoreProps = {
      store,
    }

    storeRequiredData.initialState = store.getState()

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ...ctx,
        ...storeRequiredData,
      })
    }

    return {
      // expose props from the component (allowing custom app behavior)
      pageProps,
      // expose redux store data
      ...storeRequiredData,
    }
  }
  state = {
    store: getOrInitReduxStore(this.props),
  }

  componentDidMount() {
    console.log(this.props)

    // handle ngpress
    hookIntoRouterCallbacks()

    persistStoreBetweenPageTransitions(this.state.store)
  }

  render() {
    const { Component, pageProps } = this.props
    const { store } = this.state

    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Head />
          <Component {...pageProps} store={store} />
        </Provider>
      </ThemeProvider>
    )
  }
}

export default appWithTranslation(MyApp)
