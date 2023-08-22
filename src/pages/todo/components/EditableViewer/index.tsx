import SDatePicker from "@/components/SDatePicker";
import { PRIORITY } from "@/constants";
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
import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface EditableViewerProps {
  open: boolean;
  setOpen: (visible: boolean) => void;
  title: string;
  type: "EDIT" | "VIEW";
  initialValue?: TYPE.Todo;
}

const EditableViewer: React.FC<EditableViewerProps> = ({
  open,
  setOpen,
  title,
  initialValue,
  type,
}) => {
  const [form] = Form.useForm();
  const [deadline, setDeadline] = useState(false);
  const [remindTime, setRemindTime] = useState(false);

  const { addTodo } = useModel("todos", (model) => ({
    addTodo: model?.addTodo,
  }));
  const { labels } = useModel("labels", (model) => ({
    labels: model?.labels,
  }));

  // 初始化表单值
  useEffect(() => {
    if (initialValue?.deadline) setDeadline(true);
    if (initialValue?.remindTime) setRemindTime(true);
    form.setFieldsValue(initialValue);
  }, [initialValue]);

  // 重置表单信息
  const reset = () => {
    setDeadline(false);
    setRemindTime(false);
    form.resetFields();
  };

  // 保存
  const onSave = async () => {
    const formData = await form.validateFields();
    const res = {
      ...formData,
      remindTime: remindTime
        ? formData.deadline - formData.remindTime
        : undefined,
    };
    addTodo(res);
    reset();
    setOpen(false);
  };

  // 时间改变时
  const timeChange = (time: number) => {
    form.setFieldValue("deadline", time);
  };

  return (
    <Drawer
      open={open}
      autoFocus
      title={title}
      maskClosable
      onClose={() => {
        setOpen(false);
      }}
      size="large"
      extra={
        type === "EDIT" ? (
          <Space size="middle">
            <Button onClick={() => setOpen(false)}>取消</Button>
            <Button onClick={onSave} type="primary">
              保存
            </Button>
          </Space>
        ) : (
          <Button onClick={() => setOpen(false)}>关闭</Button>
        )
      }
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          name="title"
          label="标题"
          rules={type === "EDIT" ? [{ required: true }] : []}
        >
          <Input disabled={type === "VIEW"} />
        </Form.Item>
        <Form.Item
          name="description"
          label="描述"
          rules={type === "EDIT" ? [{ required: true }] : []}
        >
          <Input.TextArea disabled={type === "VIEW"} rows={4} />
        </Form.Item>
        <Form.Item
          name="priority"
          label="优先级"
          rules={type === "EDIT" ? [{ required: true }] : []}
          tooltip={"数字越大优先级越高"}
        >
          <Radio.Group disabled={type === "VIEW"}>
            {PRIORITY.map((priority) => (
              <Radio.Button
                key={priority.value}
                value={priority.value}
              >{`P${priority.value}`}</Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
        {type === "EDIT" ? (
          <Space style={{ marginBottom: "20px" }}>
            <Switch
              onChange={(value) => {
                setDeadline(value);
                // 设置 form.item 的 initialValue 不生效
                if (value) {
                  form.setFieldValue(
                    "deadline",
                    dayjs().add(1, "hour").valueOf(),
                  );
                }
                if (!value) {
                  setRemindTime(value);
                }
              }}
            />
            <span>设置截止时间</span>
          </Space>
        ) : (
          <span>截止时间</span>
        )}
        {deadline && (
          <Form.Item name="deadline">
            <SDatePicker
              disabled={type === "VIEW"}
              initValue={dayjs().add(1, "hour").valueOf()}
              onChange={timeChange}
            />
          </Form.Item>
        )}
        {type === "EDIT" && deadline ? (
          <Space style={{ marginBottom: "20px" }}>
            <Switch onChange={(value) => setRemindTime(value)} />
            <span>设置提醒时间</span>
          </Space>
        ) : (
          type === "VIEW" && <span>提醒时间</span>
        )}
        {remindTime && deadline ? (
          <Form.Item
            name="remindTime"
            style={{ display: remindTime && deadline ? "block" : "none" }}
            initialValue={1000 * 30 * 60}
          >
            <Select
              disabled={type === "VIEW"}
              allowClear
              style={{ width: "30%" }}
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
            disabled={type === "VIEW"}
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="多选项"
            options={labels}
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default EditableViewer;
