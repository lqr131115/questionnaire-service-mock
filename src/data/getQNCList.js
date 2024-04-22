const Mock = require("mockjs");
const Random = Mock.Random;

const textTestQNC = [
  {
    id: Random.guid(),
    qn_id: "qn_title_id", //  Random.guid() 生成的ID不固定 导致统计答卷时Table无法匹配
    title: "Title",
    type: "qnTitle",
    props: {
      text: "服务器标题内容",
      level: 3,
      align: "center",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_paragraph_id",
    title: "Paragraph",
    type: "qnParagraph",
    props: {
      content: "服务器段落内容",
      align: "center",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_info_id",
    title: "Info",
    type: "qnInfo",
    props: {
      title: "服务器信息标题",
      content: "服务器信息内容",
    },
    hidden: false,
    locked: false,
  },
];

const inputTestQNC = [
  {
    id: Random.guid(),
    qn_id: "qn_input_number_id",
    title: "InputNumber",
    type: "qnInputNumber",
    props: {
      title: "服务器数字输入标题",
      placeholder: "服务器请输入",
      defaultValue: 2,
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_input_id",
    title: "Input",
    type: "qnInput",
    props: {
      title: "服务器单行输入标题",
      placeholder: "服务器请输入",
      size: "middle",
      defaultValue: "服务器单行输入默认值",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_textarea_id",
    title: "TextArea",
    type: "qnTextArea",
    props: {
      title: "服务器多行输入标题",
      placeholder: "服务器请输入",
      defaultValue: "服务器多行输入默认值",
    },
    hidden: false,
    locked: false,
  },
];

const choiceTestQNC = [
  {
    id: Random.guid(),
    qn_id: "qn_radio_id",
    title: "Radio",
    type: "qnRadio",
    props: {
      title: "服务器单选标题",
      options: [
        { value: "A", label: "A" },
        { value: "B", label: "B" },
        { value: "C", label: "C" },
        { value: "D", label: "D" },
      ],
      defaultValue: "A",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_check_id",
    title: "Checkbox",
    type: "qnCheckbox",
    props: {
      title: "服务器多选标题",
      options: [
        { value: "A", label: "A", checked: Random.boolean() },
        { value: "B", label: "B", checked: Random.boolean() },
        { value: "C", label: "C", checked: Random.boolean() },
        { value: "D", label: "D", checked: Random.boolean() },
      ],
    },
    hidden: false,
    locked: false,
  },
];

const testQNC = [...textTestQNC, ...inputTestQNC, ...choiceTestQNC];

const statQNC = [
  {
    id: Random.guid(),
    qn_id: "qn_info_id",
    title: "Info",
    type: "qnInfo",
    props: {
      title: "调研报告",
      content: "家里蹲大学计算机学院24届毕业生就业方向调研报告",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_input_id",
    title: "Input",
    type: "qnInput",
    props: {
      title: "您的姓名",
      placeholder: "请输入",
      size: "middle",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_input_number_id",
    title: "InputNumber",
    type: "qnInputNumber",
    props: {
      title: "您的年龄",
      placeholder: "请输入",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_radio_id",
    title: "Radio",
    type: "qnRadio",
    props: {
      title: "您的性别",
      options: [
        { value: "A", label: "男" },
        { value: "B", label: "女" },
        { value: "C", label: "保密" },
      ],
      defaultValue: "C",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_check_id",
    title: "Checkbox",
    type: "qnCheckbox",
    props: {
      title: "您的技术栈",
      options: [
        { value: "A", label: "算法", checked: false },
        { value: "B", label: "后端", checked: false },
        { value: "C", label: "前端", checked: false },
        { value: "D", label: "测试", checked: false },
        { value: "E", label: "其他", checked: false },
      ],
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_textarea_id",
    title: "TextArea",
    type: "qnTextArea",
    props: {
      title: "备注",
      placeholder: "请输入",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_paragraph_id",
    title: "Paragraph",
    type: "qnParagraph",
    props: {
      content: "谢谢您的填写",
      align: "start",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qn_id: "qn_title_id", //  Random.guid() 生成的ID不固定 导致统计答卷时Table无法匹配
    title: "Title",
    type: "qnTitle",
    props: {
      text: "祝您好运",
      level: 4,
      align: "start",
    },
    hidden: false,
    locked: false,
  },
];
function getQNCList() {
  return statQNC;
}

module.exports = getQNCList;
