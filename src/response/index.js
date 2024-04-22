class BaseRes {
  constructor() {
    this.code = 200;
    this.msg = "";
    this.data = null;
  }
}

class SuccessRes extends BaseRes {
  constructor(data, options) {
    super();
    this.data = data;
    if (options) {
      for (const key in options) {
        this[key] = options[key];
      }
    }
  }
}

class ErrorRes extends BaseRes {
  constructor({ code, msg }) {
    super();
    this.code = code;
    this.msg = msg;
  }
}

module.exports = {
  SuccessRes,
  ErrorRes,
};
