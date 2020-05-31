import { Router } from 'express';
import path from 'path';

const iconRegex = /\/_next\/public\/static\/icons\/.{1,}\.(ico|png|jpg|svg)/;
const STATIC_ASSETS_ROUTES = [
  '/service-worker.js',
  '/robots.txt',
  '/manifest.json',
  iconRegex,
];

const routes = () => {
  const router = Router();
  const handler = (req, res) => {
    const originalUrl = req.originalUrl;
    const isIcon = iconRegex.test(originalUrl);
    const isManifest = ['/manifest.json'].includes(originalUrl);
    const lastPath = isIcon ? req.path.replace('/_next/public/static', '') : req.path;
    const filePath = path.join(
      __dirname,
      !isManifest ? '../../public/static' : '../../',
      lastPath,
    );

    res.set('cache-control', 'max-age=86400, public');
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
