const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

const isServer = () => Object.prototype.toString.call(global.process) === '[object process]';

export interface ILocationProps {
  fullUrl: string;
  origin: string;
}

const getLocation = (req: any) => req && req ? {
  // https://stackoverflow.com/a/10185427
  fullUrl: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
  origin: `${req.protocol}://${req.get('host')}`,
} : undefined;

const persistStoreBetweenPageTransitions = (store) => {
  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = store;
  }
  return window[__NEXT_REDUX_STORE__];
};

const getStoreBetweenPageTransitions = () => {
  if (window[__NEXT_REDUX_STORE__]) {
    return window[__NEXT_REDUX_STORE__];
  }
  return null;
};

export {
  isServer,
  getLocation,
  persistStoreBetweenPageTransitions,
  getStoreBetweenPageTransitions,
};
