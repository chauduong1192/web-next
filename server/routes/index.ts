import { Router } from 'express';
import * as next from 'next';

import i18next from './i18next';
import staticAssets from './staticAssets';
import wildCard from './wildcard';

const assetPrefix = process.env.ASSET_PREFIX;

interface IRoutesProps {
  app: next.Server;
  dev: boolean;
}

const routes = (props: IRoutesProps) => {
  const router = Router();

  if (assetPrefix) {
    props.app.setAssetPrefix(assetPrefix);
  } else {
    router.use(staticAssets(props));
  }
  // router.use(i18next());
  router.use(wildCard(props));

  return router;
};

export default routes;
export {
  IRoutesProps,
};
