import * as LRUCache from 'lru-cache';

const enabled = process.env.SSR_CACHE_ENABLED || false;
const max = +process.env.SSR_CACHE_MAX || 100;
const maxAge = +process.env.SSR_CACHE_MAX_AGE || 0; // 1 hour

const ssrCache = new LRUCache({ max, maxAge });

const getCacheKey = req => req.url;

const renderAndCache = async (app, req, res, pagePath, queryParams?) => {

  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));

    return;
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);

      return;
    }

    // Let's cache this page
    if (enabled) {
      ssrCache.set(key, html);
    }

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
};

export default renderAndCache;
