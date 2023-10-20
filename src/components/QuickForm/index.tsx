import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  Upload,
} from "antd";

import React from "react";

const { Option } = Select;

/**
 * 组件类型
 */
type ComponentType =
  | "input"
  | "password"
  | "checkbox"
  | "mulcheckbox"
  | "button"
  | "text"
  | "select"
  | "mulselect"
  | "number"
  | "switch"
  | "slider"
  | "radio"
  | "rate"
  | "upload"
  | "dragupload";

/**
 * 表单项
 */
interface itemProps {
  label: string;
  name: string;
}

/**
 * 表单项组件属性
 * type：组件类型
 * props：组件属性
 * children：组件内容
 */
interface componentProps {
  type: ComponentType;
  props?: any;
  children?: any; // opt：可能是文本可能是对象，后续补齐
}

/**
 * 输入的表单属性
 * key：唯一 key 值，后面弄一个自动生成
 * itemProps：表单项属性
 * conponentProps：表单项组件属性
 */
interface FormProps {
  key: string;
  itemProps: itemProps;
  componentProps: componentProps;
}

// selectOption
const selectOption = [
  {
    value: "abc",
    name: "ABC",
    key: "1",
  },
  {
    value: "aaa",
    name: "AAA",
    key: "2",
  },
];

// radioOption
const radioOption = [
  {
    value: "abc",
    name: "ABC",
    key: "1",
  },
  {
    value: "aaa",
    name: "AAA",
    key: "2",
  },
];

// mulcheckbox
const checkboxOption = [
  {
    value: "abc",
    name: "ABC",
    key: "1",
  },
  {
    value: "aaa",
    name: "AAA",
    key: "2",
  },
];

/**
 * 组件函数
 * @param props：可以传递 FormProps 或者是除掉 itemProps 的类型，因为某些情况下组件之间可以套娃，套娃组件是不需要输入 itemProps 的
 * @returns React.Component
 */
const componentMapping = (props: componentProps) => {
  const { type, children, props: restProps } = props;
  switch (type) {
    case "input":
      return <Input {...restProps}></Input>;
    case "password":
      return <Input.Password {...restProps}></Input.Password>;
    case "checkbox":
      return <Checkbox {...restProps}>{children}</Checkbox>;
    case "button":
      return <Button {...restProps}>{children}</Button>;
    case "text":
      return <span {...restProps}>{children}</span>;
    case "select":
      return <Select {...restProps}>{children}</Select>;
    case "mulselect":
      return (
        <Select mode="multiple" {...restProps}>
          {children}
        </Select>
      );
    case "number":
      return <InputNumber defaultValue={0} {...restProps}></InputNumber>;
    case "switch":
      return <Switch {...restProps}></Switch>;
    case "slider":
      return <Slider {...restProps}></Slider>;
    case "radio":
      return <Radio.Group {...restProps}>{children}</Radio.Group>;
    case "mulcheckbox":
      return <Checkbox.Group {...restProps}>{children}</Checkbox.Group>;
    case "rate":
      return <Rate {...restProps}>{children}</Rate>;
    case "upload":
      return <Upload {...restProps}>{children}</Upload>;
    case "dragupload":
      return (
        <Upload.Dragger {...restProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Upload.Dragger>
      );
  }
};

const formProps: FormProps[] = [
  {
    key: "1",
    itemProps: {
      label: "用户名",
      name: "username",
    },
    componentProps: {
      type: "input",
    },
  },
  {
    key: "2",
    itemProps: {
      label: "密码",
      name: "password",
    },
    componentProps: {
      type: "password",
    },
  },
  {
    key: "3",
    itemProps: {
      label: "记住我",
      name: "remember",
    },
    componentProps: {
      type: "checkbox",
      children: "checkbox",
    },
  },
  {
    key: "4",
    itemProps: {
      label: "按钮",
      name: "button",
    },
    componentProps: {
      type: "button",
      children: "button",
    },
  },
  {
    key: "5",
    itemProps: {
      label: "文本",
      name: "text",
    },
    componentProps: {
      type: "text",
      children: "testText",
    },
  },
  {
    key: "6",
    itemProps: {
      label: "select",
      name: "select",
    },
    componentProps: {
      type: "select",
      children: selectOption.map((item) => (
        <Option key={item.key} value={item.value}>
          {item.name}
        </Option>
      )),
    },
  },
  {
    key: "7",
    itemProps: {
      label: "mulselect",
      name: "mulselect",
    },
    componentProps: {
      type: "mulselect",
      children: selectOption.map((item) => (
        <Option key={item.key} value={item.value}>
          {item.name}
        </Option>
      )),
    },
  },
  {
    key: "8",
    itemProps: {
      label: "number",
      name: "number",
    },
    componentProps: {
      type: "number",
    },
  },
  {
    key: "9",
    itemProps: {
      label: "switch",
      name: "switch",
    },
    componentProps: {
      type: "switch",
    },
  },
  {
    key: "10",
    itemProps: {
      label: "slider",
      name: "slider",
    },
    componentProps: {
      type: "slider",
      props: {
        marks: {
          0: "1",
          50: "2",
          100: "3",
        },
      },
    },
  },
  {
    key: "11",
    itemProps: {
      label: "radio",
      name: "radio",
    },
    componentProps: {
      type: "radio",
      children: radioOption.map((item) => (
        <Radio key={item.key} value={item.value}>
          {item.name}
        </Radio>
      )),
    },
  },
  {
    key: "12",
    itemProps: {
      label: "mulcheckbox",
      name: "mulcheckbox",
    },
    componentProps: {
      type: "mulcheckbox",
      children: checkboxOption.map((item) =>
        componentMapping({
          type: "checkbox",
          props: {
            value: item.value,
          },
          children: item.name,
        }),
      ),
    },
  },
  {
    key: "13",
    itemProps: {
      label: "rate",
      name: "rate",
    },
    componentProps: {
      type: "rate",
    },
  },
  {
    key: "14",
    itemProps: {
      label: "upload",
      name: "upload",
    },
    componentProps: {
      type: "upload",
      children: <Button icon={<UploadOutlined />}>upload</Button>,
    },
  },
  {
    key: "15",
    itemProps: {
      label: "dragupload",
      name: "dragupload",
    },
    componentProps: {
      type: "dragupload",
    },
  },
];

const QuickForm: React.FC = () => (
  <Form>
    {formProps.map((item) => {
      const { key, itemProps, componentProps } = item;
      return (
        <Form.Item key={key} {...itemProps}>
          {componentMapping(componentProps)}
        </Form.Item>
      );
    })}
  </Form>
);

export default QuickForm;
