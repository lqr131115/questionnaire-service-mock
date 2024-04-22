const Mock = require("mockjs");
const { SuccessRes } = require("../response/index");
const getStatList = require("../data/getStatList");
const Random = Mock.Random;
module.exports = [
  {
    url: "/mock/stat/:id",
    method: "get",
    response(ctx) {
      // page 暂时用不到
      const { pageSize = "10" } = ctx.query;
      return new SuccessRes({
        id: Random.guid(),
        statList: getStatList({ len: +pageSize }),
        total: 200,
      });
    },
  },
  {
    url: "/mock/stat/:id/:componentId",
    method: "get",
    response(ctx) {
      return new SuccessRes({
        stat: [
          { name: "1996", value: 6 },
          { name: "1997", value: 7 },
          { name: "1998", value: 9 },
          { name: "1999", value: 13 },
        ],
      });
    },
  },
];
