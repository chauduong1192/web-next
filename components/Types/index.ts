/**
 * Most of the time components have these props
 */
export interface IBasicComponentProps {
  t?: (a: string, b?: any) => string;
  className?: string;
  language?: string;
  children?: any;
}

/**
 * Most of the time pages have these props
 */
export interface IBasicPageProps extends IBasicComponentProps {
  asPath: string;
  user: any;
  req?: any;
  query: any;
  store: {
    dispatch: (a: any) => any,
    getState: () => any,
    subscribe: (cb: () => any) => any,
  };
}
