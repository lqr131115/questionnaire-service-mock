const Router = require("koa-router");
const mockApi = require("../api/index");
const router = new Router();

async function getRes(fn, delay = 300) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, delay);
  });
}

mockApi.forEach((api) => {
  const { url, method, response } = api;
  router[method](url, async (ctx) => {
    ctx.body = await getRes(() => response(ctx));
  });
});

module.exports = router;
