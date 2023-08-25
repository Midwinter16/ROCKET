import { COLOR } from "@/constants";
import { useModel } from "@umijs/max";
import { useAsyncEffect } from "ahooks";
import {
  Button,
  Drawer,
  Form,
  Input,
  Popconfirm,
  Radio,
  Space,
  Tag,
  message,
} from "antd";
import { Dispatch, useEffect, useState } from "react";

interface EditLabelProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  type: "VIEW" | "EDIT";
  initValue: {
    value: string;
    label: string;
    color: string;
    id: number;
  };
  setInitValue: Dispatch<any>;
}

const EditLabel: React.FC<EditLabelProps> = ({
  open,
  setOpen,
  type,
  initValue,
  setInitValue,
}) => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState<boolean>(false);
  const { addLabel, changeLabel } = useModel("labels", (model) => ({
    addLabel: model.addLabel,
    changeLabel: model.changeLabel,
  }));

  useEffect(() => {
    form.setFieldsValue(initValue);
  }, [initValue]);

  useAsyncEffect(async () => {
    if (type === "VIEW") {
      await form
        .validateFields()
        .then(() => {
          setDisabled(false);
        })
        .catch(() => {
          setDisabled(true);
        });
    }
  }, [initValue]);

  const onSave = async () => {
    const res = await form.validateFields();
    // 对齐 select 中的 options 格式要求
    const formatRes = {
      ...res,
      value: res.value,
      label: res.value,
    };
    if (type === "EDIT") {
      const repeatName = addLabel(formatRes);
      if (repeatName) {
        return message.warning(`标签${repeatName}已存在`);
      }
      message.success(`添加标签<${formatRes.value}>成功`);
    } else if (type === "VIEW") {
      changeLabel(formatRes, initValue.id);
      message.success(`修改标签<${formatRes.value}>成功`);
    }
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      autoFocus
      title={type === "EDIT" ? "创建标签" : "编辑标签"}
      maskClosable
      onClose={() => {
        setOpen(false);
      }}
      size="large"
      extra={
        <Space>
          {type === "EDIT" ? (
            <Button onClick={() => setOpen(false)}>关闭</Button>
          ) : (
            <Button danger onClick={() => setOpen(false)}>
              删除
            </Button>
          )}
          {type === "EDIT" ? (
            <Button type="primary" onClick={() => onSave()}>
              保存
            </Button>
          ) : (
            <Popconfirm
              cancelText="取消"
              okText="确认"
              onConfirm={() => onSave()}
              title="确认修改标签信息？"
              disabled={disabled}
            >
              <Button disabled={disabled} type="primary">
                保存
              </Button>
            </Popconfirm>
          )}
        </Space>
      }
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          name="value"
          label="标签名"
          rules={[
            { max: 6, message: "标签名称最大支持 6 个字符" },
            { required: true, message: "标签名称不能为空" },
          ]}
        >
          <Input
            onChange={(e) =>
              setInitValue({
                ...initValue,
                value: e.target.value,
              })
            }
          />
        </Form.Item>
        <Form.Item
          name="color"
          label="标签颜色"
          rules={[{ required: true, message: "请选择标签颜色" }]}
        >
          <Radio.Group
            onChange={(e) =>
              setInitValue({
                ...initValue,
                color: e.target.value,
              })
            }
          >
            {COLOR.map((color) => (
              <Radio.Button key={color.value} value={color.value}>
                {color.name}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
      </Form>
      <Space direction="vertical">
        <span>标签预览</span>
        <Tag color={initValue.color}>
          {initValue.value ? initValue.value : "模板"}
        </Tag>
      </Space>
    </Drawer>
  );
};

export default EditLabel;
