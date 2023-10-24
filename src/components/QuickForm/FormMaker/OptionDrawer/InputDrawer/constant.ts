// 输入框前后缀类型
export const radioOptions = [
  {
    value: "none",
    name: "不开启",
  },
  {
    value: "icon",
    name: "图标",
  },
  {
    value: "text",
    name: "文字",
  },
  {
    value: "select",
    name: "选择器",
  },
];

// 输入框类型
export const InputType = [
  {
    value: "input",
    name: "普通输入框",
  },
  {
    value: "password",
    name: "密码输入框",
  },
  {
    value: "number",
    name: "数字输入框",
  },
  {
    value: "textarea",
    name: "文本段输入框",
  },
];

// 对输入框类型配置的表单项
export const typeOption = {
  input: ["prefix", "suffix", "limit", "placeholder"],
  password: ["prefix", "suffix", "placeholder"],
  number: ["placeholder", "min", "max"],
  textarea: ["limit", "placeholder", "autoSize"],
};
