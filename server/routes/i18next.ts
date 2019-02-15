import { Router } from 'express';
import { handle } from 'i18next-express-middleware';

import i18next from '../utils/i18next';
import { STATIC_ASSETS_ROUTES } from './staticAssets';

const routes = () => {
  const router = Router();
  const i18nextInstance = i18next();

  // plug i18next middleware
  router.use(handle(i18nextInstance, {
    // tslint:disable-next-line:readonly-array
    ignoreRoutes: [
      ...STATIC_ASSETS_ROUTES,
      '/_next',
    ],
  }));

  return router;
};

export default routes;
