const Koa = require("koa");
const router = require("./router/index");
const koa = new Koa();

koa.use(router.routes());
koa.listen(3001, () => {
  console.log("server is running at http://localhost:3001");
});
