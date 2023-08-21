import { PRIORITY } from "@/constants";
import { SettingOutlined } from "@ant-design/icons";
import { useModel } from "@umijs/max";
import { Button, Col, Popconfirm, Row, Space, Table, Tag, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import EditableViewer from "../../EditableViewer";

interface ListProps {
  data?: TYPE.Todo[];
  title: string;
  loading: boolean;
}

const UncompletedList: React.FC<ListProps> = ({ loading, data }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [initValue, setinitValue] = useState<TYPE.Todo>({});
  const { completedTodo, deleteTodo } = useModel("todos", (model) => ({
    completedTodo: model.completedTodo,
    deleteTodo: model.deleteTodo,
  }));

  const columns: ColumnsType<TYPE.Todo> = [
    {
      title: "名称",
      dataIndex: "title",
      key: "title",
      width: 200,
      render: (text: string, record) => (
        <a
          style={{ color: "blue" }}
          onClick={() => {
            setinitValue(record);
            setViewOpen(true);
          }}
        >
          {text}
        </a>
      ),
      fixed: "left",
    },
    {
      title: "描述",
      dataIndex: "description",
      width: 200,
      key: "description",
      ellipsis: true,
      fixed: "left",
    },
    {
      title: "优先级",
      dataIndex: "priority",
      key: "priority",
      width: 100,
      sorter: (a, b) => a.priority - b.priority,
      render: (priority) => {
        const res = PRIORITY.find((item) => item.priority === priority);
        return <Tag color={res?.color}>{`P${priority}`}</Tag>;
      },
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "截止时间",
      dataIndex: "deadline",
      key: "deadline",
    },
    {
      title: "标签",
      key: "labels",
      dataIndex: "labels",
      render: (labels: string[]) => (
        <>
          {labels &&
            labels.map((tag) => {
              return (
                <Tag color="red" key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
        </>
      ),
    },
    {
      title: "操作",
      key: "action",
      fixed: "right",
      width: 120,
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              completedTodo(record.id);
              message.success(`完成${record.title}啦`);
            }}
          >
            完成
          </a>
          <Popconfirm
            title="确认删除？"
            cancelText="取消"
            okText="确认"
            onConfirm={() => deleteTodo(record.id)}
          >
            <a>删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const titleRender = (pageData: any) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>共 {pageData.length} 条</span>
      <SettingOutlined style={{ fontSize: "14px" }} />
    </div>
  );

  return (
    <>
      <Row justify="end" style={{ marginBottom: "10px" }}>
        <Col>
          <Button type="primary" onClick={() => setEditOpen(true)}>
            新增代办
          </Button>
        </Col>
      </Row>
      <Table
        loading={loading}
        scroll={{ x: 1400 }}
        sticky
        columns={columns}
        dataSource={data}
        title={titleRender}
      />
      <EditableViewer
        open={editOpen}
        setOpen={setEditOpen}
        title="新增代办"
        type="EDIT"
      ></EditableViewer>
      <EditableViewer
        open={viewOpen}
        setOpen={setViewOpen}
        title="查看详情"
        type="VIEW"
        initialValue={initValue}
      ></EditableViewer>
    </>
  );
};

export default UncompletedList;
