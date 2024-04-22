// 100X
const userHasExist = {
  code: 1001,
  msg: "用户名已存在",
};

const userNotExist = {
  code: 1002,
  msg: "用户不存在",
};

const passwordError = {
  code: 1003,
  msg: "密码错误",
};

const passwordNotEqual = {
  code: 1004,
  msg: "两次密码不一致",
};

// 200X
const questionnaireNotExist = {
  code: 2005,
  msg: "问卷不存在",
};

module.exports = {
  userHasExist,
  userNotExist,
  passwordError,
  passwordNotEqual,
  questionnaireNotExist,
};
