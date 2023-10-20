import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  Upload,
  message,
} from "antd";
import { ComponentProps, FormProps } from "./type";

import React, { useState } from "react";

const { TextArea } = Input;

/**
 * 组件函数
 * @param props
 * @returns React.Component
 */
export const componentMapping = (props: ComponentProps) => {
  const { type, children, props: restProps } = props;
  switch (type) {
    case "input":
      return <Input {...restProps}></Input>;
    case "password":
      return <Input.Password {...restProps}></Input.Password>;
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
    case "checkbox":
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
    case "color":
      return <ColorPicker {...restProps}>{children}</ColorPicker>;
    case "date":
      return <DatePicker {...restProps}>{children}</DatePicker>;
    case "rangedate":
      return (
        <DatePicker.RangePicker {...restProps}>
          {children}
        </DatePicker.RangePicker>
      );
    case "time":
      return <TimePicker {...restProps}>{children}</TimePicker>;
    case "textarea":
      return <TextArea {...restProps}>{children}</TextArea>;
    case "cascader":
      return <Cascader {...restProps}>{children}</Cascader>;
  }
};

interface QuickFormProps {
  formOptions: FormProps[];
}

const QuickForm: React.FC<QuickFormProps> = (props) => {
  const { formOptions } = props;
  const [form] = Form.useForm();
  const [labelCol, setLabelCol] = useState<number>(4); // 表单 label 的占比，同 Col 写法
  const submit = () => {
    console.log(123, form.getFieldsValue());
  };
  const confirm = () => {
    form.resetFields();
    message.info("已重置表单");
  };
  return (
    formOptions.length && (
      <Form labelCol={{ span: labelCol }} form={form}>
        {formOptions.map((item) => {
          const { key, itemProps, componentProps } = item;
          return (
            <Form.Item key={key} {...itemProps}>
              {componentMapping(componentProps)}
            </Form.Item>
          );
        })}
        <Form.Item wrapperCol={{ offset: labelCol }}>
          <Button type="primary" onClick={submit}>
            提交
          </Button>
          <Popconfirm
            title="重置表单"
            description="确认要重置表单吗"
            onConfirm={confirm}
            okText="重置"
            cancelText="取消"
          >
            <Button htmlType="button">重置</Button>
          </Popconfirm>
        </Form.Item>
      </Form>
    )
  );
};

export default QuickForm;
