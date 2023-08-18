import SDatePicker from "@/components/SDatePicker";
import { useModel } from "@umijs/max";
import {
  Button,
  Drawer,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Switch,
} from "antd";
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
  const [remindTime, setRemindTime] = useState(false);
  const { labelsList } = useModel("global", (model) => ({
    labelsList: model.labelsList,
  }));

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
          <Switch
            onChange={(value) => {
              setDeadline(value);
              if (!value) {
                setRemindTime(value);
              }
            }}
          />
          <span>设置截止时间</span>
        </Space>
        {deadline && (
          <Form.Item name="deadline">
            <SDatePicker />
          </Form.Item>
        )}

        {deadline && (
          <Space style={{ marginBottom: "20px" }}>
            <Switch onChange={(value) => setRemindTime(value)} />
            <span>设置提醒时间</span>
          </Space>
        )}
        {remindTime && deadline ? (
          <Form.Item
            name="remindTime"
            style={{ display: remindTime && deadline ? "block" : "none" }}
          >
            <Select
              allowClear
              style={{ width: "30%" }}
              defaultValue={[1000 * 30 * 60]}
              options={[
                {
                  label: "30 分钟前",
                  value: 1000 * 30 * 60,
                },
                {
                  label: "一小时前",
                  value: 1000 * 60 * 60,
                },
                {
                  label: "两小时前",
                  value: 1000 * 60 * 60 * 2,
                },
              ]}
            />
          </Form.Item>
        ) : null}
        <Form.Item name="labels" label="标签">
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="可选项"
            options={labelsList}
          />
        </Form.Item>
        <Form.Item name="priority" label="优先级" rules={[{ required: true }]}>
          <Radio.Group defaultValue="low">
            <Radio.Button value="low">低优先级</Radio.Button>
            <Radio.Button value="middle">普通级别</Radio.Button>
            <Radio.Button value="high">高优先级</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default EditableViewer;
