import { ComponentType } from "./type";

interface selectOptionsProps {
  value: ComponentType;
  label: string;
  children?: Omit<selectOptionsProps, "children">[];
}

// 级联选择器Option
export const selectOptions: selectOptionsProps[] = [
  {
    value: "input",
    label: "输入框",
    children: [
      {
        value: "input",
        label: "普通输入框",
      },
      {
        value: "password",
        label: "密码输入框",
      },
      {
        value: "number",
        label: "数字输入框",
      },
      {
        value: "textarea",
        label: "文本段输入框",
      },
    ],
  },
  {
    value: "select",
    label: "选择器",
    children: [
      {
        value: "select",
        label: "单项选择器",
      },
      {
        value: "mulselect",
        label: "多项选择器",
      },
      {
        value: "cascader",
        label: "级联选择器",
      },
    ],
  },
  {
    value: "upload",
    label: "上传",
    children: [
      {
        value: "upload",
        label: "按钮上传",
      },
      {
        value: "dragupload",
        label: "拖拽上传",
      },
    ],
  },
  {
    value: "date",
    label: "时间",
    children: [
      {
        value: "date",
        label: "日期选择器",
      },
      {
        value: "rangedate",
        label: "时间段选择器",
      },
      {
        value: "time",
        label: "时间选择器",
      },
    ],
  },
  {
    value: "radio",
    label: "单选框",
  },
  {
    value: "checkbox",
    label: "多选框",
  },
  {
    value: "switch",
    label: "开关",
  },
  {
    value: "color",
    label: "颜色选择器",
  },
  {
    value: "rate",
    label: "评分",
  },
  {
    value: "slider",
    label: "滑动器",
  },
  {
    value: "text",
    label: "文本",
  },
];

// 类型中英映射
export const typeMapping = selectOptions.flatMap((item) => {
  if (item.children) return item.children;
  return { ...item };
});
