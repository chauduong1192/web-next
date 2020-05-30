import { Router } from 'express';
import path from 'path';

const STATIC_ASSETS_ROUTES = [
  '/service-worker.js',
  '/robots.txt',
];

const routes = ({ dev }) => {
  const router = Router();
  const handler = (req, res) => {
    const filePath = path.join(
      __dirname,
      dev ? '../../.next/static' : '../../static',
      req.path,
    );

    res.status(200).sendFile(filePath);
  };

  STATIC_ASSETS_ROUTES.forEach((p) => {
    router.get(p, handler);
  });

  return router;
};

export default routes;
export {
  STATIC_ASSETS_ROUTES,
};
