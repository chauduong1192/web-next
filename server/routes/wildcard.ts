import { Router } from 'express';

const routes = ({ app }) => {
  const router = Router();
  const handle = app.getRequestHandler();

  router.get('*', handle);

  return router;
};

export default routes;
