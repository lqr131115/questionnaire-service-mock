const questionApi = require("./question");
const userApi = require("./user");
const statApi = require("./stat");
const answerApi = require("./answer");

module.exports = [...userApi, ...questionApi, ...statApi, ...answerApi];
