/**
 * Most of the time components have these props
 */
export interface IBasicComponentProps {
  // i18n fn, generally defaulted to identity function
  t?: (a: string, b?: any) => string;
  // classname string, usually added on parent
  className?: string;
  // current language, will be get by parent
  language?: string;
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
