import SDatePicker from "@/components/SDatePicker";
import { Button, Drawer, Form, Input, Space, Switch } from "antd";
import moment from "moment";
import { useState } from "react";

interface EditableViewerProps {
  open: boolean;
  setOpen: (visible: boolean) => void;
  title: string;
}

const initialForm = {
  title: "",
  description: "",
  deadline: moment().add(1, "day").valueOf(),
  labels: [""],
  priority: "low",
  remindTime: false,
};

const EditableViewer: React.FC<EditableViewerProps> = ({
  open,
  setOpen,
  title,
}) => {
  const [form] = Form.useForm();
  const [deadline, setDeadline] = useState(false);
  const onSave = async () => {
    const formData = await form.validateFields();
  };

  return (
    <Drawer
      open={open}
      autoFocus
      title={title}
      maskClosable
      onClose={() => setOpen(false)}
      size="large"
      extra={
        <Space size="middle">
          <Button onClick={() => setOpen(false)}>取消</Button>
          <Button onClick={onSave} type="primary">
            保存
          </Button>
        </Space>
      }
    >
      <Form layout="vertical" form={form}>
        <Form.Item name="title" label="标题" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="描述" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Space style={{ marginBottom: "20px" }}>
          <Switch onChange={(value) => setDeadline(value)} />{" "}
          <span>设置截止时间</span>
        </Space>
        <Form.Item
          style={{ display: deadline ? "block" : "none" }}
          name="deadline"
        >
          <SDatePicker />
        </Form.Item>
        {/* <Form.Item
          name="labels"
          label="标签（select，多选）"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="priority"
          label="优先级（单选）"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="remindTime"
          label="开启提醒（默认为截止时间前一个小时）"
        >
          <Input />
        </Form.Item> */}
      </Form>
    </Drawer>
  );
};

export default EditableViewer;
