const questionApi = require("./question");
const userApi = require("./user");
const statApi = require("./stat");

module.exports = [...userApi, ...questionApi, ...statApi];
