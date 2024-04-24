const { SuccessRes } = require("../response/index");
module.exports = [
  {
    url: "/mock/answer",
    method: "post",
    response() {
      return new SuccessRes(null, { msg: "提交成功" });
    },
  },
];
