import { Router } from 'express';
import nextI18NextMiddleware from 'next-i18next/middleware';

import nextI18next from '../../i18nnext';
import prettyUrlRouter from './prettyUrlRouter';
import staticAssets from './staticAssets';
import wildCard from './wildcard';
import proxyRouters from './proxyRouters';

const assetPrefix = process.env.ASSET_PREFIX;

const routes = (props) => {
  const router = Router();

  // for change asset prefix(cdn,..)
  if (assetPrefix) {
    props.app.setAssetPrefix(assetPrefix);
  } else {
    router.use(staticAssets());
  }

  // handle i18n translation
  router.use(nextI18NextMiddleware(nextI18next));

  // handle proxy
  router.use(proxyRouters());

  // handle all routers
  router.use(prettyUrlRouter(props));

  // handle default router
  router.use(wildCard(props));

  return router;
};

export default routes;
