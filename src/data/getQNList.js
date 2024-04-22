const Mock = require("mockjs");
const randomCount = 5 + Math.floor(Math.random() * 10);
const Random = Mock.Random;

function getQNList({ count = randomCount, isDeleted = 0, isStar }) {
  return Array.from({ length: count }, () => ({
    id: Random.guid(),
    title: Random.ctitle(),
    isPublished: Random.boolean(),
    isStar: isStar ?? Random.boolean(),
    answerCount: Random.integer(10, 30),
    createAt: Random.datetime(),
    //  1:删除  0: 未删除 -1: 永久删除
    isDeleted,
  }));
}

module.exports = getQNList;
