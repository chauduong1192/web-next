import type { AppProps } from 'next/app'

/**
 * Most of the time components have these props
 */
export interface IBasicComponentProps {
  t?: (a: string, b?: any) => string
  className?: string
  language?: string
  children?: any
}

/**
 * Most of the time pages have these props
 */
export interface IBasicPageProps extends IBasicComponentProps, IStoreProps {
  asPath: string
  user: any
  req?: any
  query: any
}

export interface IAppProps extends AppProps, IStoreProps {
  pageProps: {
    namespacesRequired: string[]
  }
  i18nServerInstance: any
}

export interface IStoreProps {
  store: {
    dispatch: (a: any) => any
    getState: () => any
    subscribe: (cb: () => any) => any
  }
  initialState?: Record<string, any>
}
