import { Router } from 'express';
import * as next from 'next';
import * as nextI18NextMiddleware from 'next-i18next/middleware';

const nextI18next = require('./../../i18nnext');
import prettyUrlRouter from './prettyUrlRouter';
import staticAssets from './staticAssets';
import wildCard from './wildcard';

const assetPrefix = process.env.ASSET_PREFIX;

interface IRoutesProps {
  app: next.Server;
  dev: boolean;
}

const routes = (props: IRoutesProps) => {
  const router = Router();

  // for change asset prefix(cdn,..)
  if (assetPrefix) {
    props.app.setAssetPrefix(assetPrefix);
  } else {
    router.use(staticAssets(props));
  }

  // handle i18n translation
  router.use(nextI18NextMiddleware(nextI18next));

  // handle all routers
  router.use(prettyUrlRouter(props));

  // handle default router
  router.use(wildCard(props));

  return router;
};

export default routes;
export {
  IRoutesProps,
};
