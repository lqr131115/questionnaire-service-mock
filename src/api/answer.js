const { SuccessRes } = require("../response/index");
module.exports = [
  {
    url: "/answer",
    method: "post",
    response() {
      return new SuccessRes(null, { msg: "提交成功" });
    },
  },
];
