import { Router } from 'express';
import nextI18NextMiddleware from 'next-i18next/middleware';

const nextI18next = require('./../../i18nnext');
import prettyUrlRouter from './prettyUrlRouter';
import staticAssets from './staticAssets';
import wildCard from './wildcard';

const assetPrefix = process.env.ASSET_PREFIX;

const routes = (props) => {
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
