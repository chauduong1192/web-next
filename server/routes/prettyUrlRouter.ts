import { Router } from 'express';
// import ssrCache from '../utils/ssrCache';

const getGenericReqParams = req => ({
  ...req.query,
  id: req.params.id,
  language: req.language,
});

const prettyUrlRouter = ({ app }) => {
  const route = Router();

  route.get('/', async (req, res) => {
    // try {
    //   await ssrCache(app, req, res, '/', getGenericReqParams(req));
    // } catch (err) {
    //   app.renderError(err, req, res, '/', getGenericReqParams(req));
    // }
    return app.render(req, res, '/', getGenericReqParams(req));
  });

  route.get('/about', async (req, res) => {
    return app.render(req, res, '/about', getGenericReqParams(req));
  });
  route.get('/components', async (req, res) => {
    return app.render(req, res, '/components', getGenericReqParams(req));
  });
  route.get('/todos', async (req, res) => {
    return app.render(req, res, '/todos', getGenericReqParams(req));
  });

  return route;
};

export default prettyUrlRouter;
