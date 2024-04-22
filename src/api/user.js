const Mock = require("mockjs");
const { SuccessRes } = require("../response/index");
const Random = Mock.Random;
module.exports = [
  {
    url: "/mock/user/register",
    method: "post",
    response() {
      return new SuccessRes(null, { msg: "注册成功" });
    },
  },
  {
    url: "/mock/user/login",
    method: "post",
    response(ctx) {
      return new SuccessRes({
        id: Mock.mock("@guid"),
        token: "Bear " + Mock.mock("@guid"),
        username: Random.cname(),
        nickname: Random.cname(),
        // avatar:
        // "https://img2.baidu.com/it/u=2801114278,952448423&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
        createAt: Mock.mock("@datetime"),
      });
    },
  },
  {
    url: "/mock/user",
    method: "get",
    response() {
      return new SuccessRes({
        id: Random.guid(),
        username: Random.cname(),
        nickname: Random.cname(),
        avatar:
          "https://img2.baidu.com/it/u=2801114278,952448423&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
      });
    },
  },
];
