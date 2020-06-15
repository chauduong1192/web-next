import { Router } from 'express';
import proxy from 'express-http-proxy';
import url from 'url';

export default () => {
  const route = Router();
  route.use('/api',
    proxy(process.env.API_URL, {
      proxyReqPathResolver: req => `${url.parse(req.url).path}`,
    }),
  );

  return route;
};
