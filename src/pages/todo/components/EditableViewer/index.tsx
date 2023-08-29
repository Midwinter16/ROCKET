import PlainText from "@/components/FormUtils";
import SDatePicker from "@/components/SDatePicker";
import { DrawerMode, PRIORITY } from "@/constants";
import { WarningTwoTone } from "@ant-design/icons";
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
  Tag,
  Tooltip,
  message,
} from "antd";
import dayjs from "dayjs";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";

interface EditableViewerProps {
  open: boolean;
  setOpen: (visible: boolean) => void;
  title: string;
  type: DrawerMode;
  initialValue?: TYPE.Todo;
}

const EditableViewer: React.FC<EditableViewerProps> = ({
  open,
  setOpen,
  title,
  initialValue = {
    deadline: dayjs().add(1, "hour").valueOf(),
  },
  type,
}) => {
  const [form] = Form.useForm();
  const [deadline, setDeadline] = useState(true);
  const [remindTime, setRemindTime] = useState(true);

  // 查看模式
  const withViewMode = useMemo(
    () => (component: React.ReactNode, format?: (v: any) => React.ReactNode) =>
      type === DrawerMode.VIEW ? <PlainText format={format} /> : component,
    [type],
  );

  const { addTodo } = useModel("todos", (model) => ({
    addTodo: model?.addTodo,
  }));
  const { labels } = useModel("labels", (model) => ({
    labels: model?.labels,
  }));

  // 初始化表单值
  useEffect(() => {
    form.setFieldsValue(initialValue);
  }, [initialValue]);

  // 保存
  const onSave = async () => {
    const formData = await form.validateFields();
    const res = {
      ...formData,
      remindTime: remindTime
        ? formData.deadline - formData.remindTime
        : undefined,
      deadline: deadline ? formData.deadline : undefined,
    };
    addTodo(res);
    setOpen(false);
    message.success("添加事件成功");
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
        DrawerMode.EDIT ? (
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
          rules={DrawerMode.EDIT === type ? [{ required: true }] : []}
        >
          {withViewMode(<Input />)}
        </Form.Item>
        <Form.Item
          name="description"
          label="描述"
          rules={DrawerMode.EDIT === type ? [{ required: true }] : []}
        >
          {withViewMode(<Input.TextArea rows={4} />)}
        </Form.Item>
        <Form.Item
          name="priority"
          label="优先级"
          rules={DrawerMode.EDIT === type ? [{ required: true }] : []}
          tooltip={"数字越大优先级越高"}
        >
          {withViewMode(
            <Radio.Group>
              {PRIORITY.map((priority) => (
                <Radio.Button
                  key={priority.value}
                  value={priority.value}
                >{`P${priority.value}`}</Radio.Button>
              ))}
            </Radio.Group>,
            (value) => (
              <Tag>P{value}</Tag>
            ),
          )}
        </Form.Item>
        {withViewMode(
          <Space style={{ marginBottom: "20px" }}>
            <Switch
              checked={deadline}
              onChange={(value) => {
                setDeadline(value);
                // 设置 form.item 的 initialValue 不生效
                if (value) {
                  form.setFieldValue(
                    "deadline",
                    dayjs().add(1, "hour").valueOf(),
                  );
                }
                // 和提醒时间联动
                if (!value) {
                  setRemindTime(false);
                }
              }}
            />
            <span>设置截止时间</span>
            {!deadline && (
              <Tooltip title="截止时间已关闭">
                <WarningTwoTone twoToneColor={"red"} />
              </Tooltip>
            )}
          </Space>,
          () => {
            return <div style={{ paddingBottom: "10px" }}>截止时间</div>;
          },
        )}

        <Form.Item name="deadline">
          {withViewMode(
            <SDatePicker
              initValue={dayjs().add(1, "hour").valueOf()}
              onChange={timeChange}
            />,
            (value) => {
              return value ? (
                <span>{moment(value).format("YYYY-MM-DD HH:mm")}</span>
              ) : (
                "未设置"
              );
            },
          )}
        </Form.Item>
        {withViewMode(
          <Space style={{ marginBottom: "20px" }}>
            <Switch
              checked={remindTime}
              onChange={(value) => {
                setRemindTime(value);
                // 和截止时间联动
                if (value) {
                  setDeadline(true);
                }
              }}
            />
            <span>设置提醒时间</span>
            {!remindTime && (
              <Tooltip title="提醒时间已关闭">
                <WarningTwoTone twoToneColor={"red"} />
              </Tooltip>
            )}
          </Space>,
          () => {
            return <div style={{ paddingBottom: "10px" }}>提醒时间</div>;
          },
        )}

        <Form.Item name="remindTime" initialValue={1000 * 30 * 60}>
          {withViewMode(
            <Select
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
            />,
            (value) => {
              return value ? (
                <span>{moment(value).format("YYYY-MM-DD HH:mm")}</span>
              ) : (
                "未设置"
              );
            },
          )}
        </Form.Item>
        <Form.Item name="labels" label="标签">
          {withViewMode(
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="多选项"
              options={labels}
            />,
            (value) => {
              if (value) {
                return value.map(
                  (
                    { color, value }: { color: string; value: string },
                    index: number,
                  ) => (
                    <Tag key={index} color={color}>
                      {value}
                    </Tag>
                  ),
                );
              }
            },
          )}
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default EditableViewer;
