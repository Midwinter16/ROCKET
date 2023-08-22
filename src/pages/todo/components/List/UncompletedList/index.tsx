import { PRIORITY } from "@/constants";
import { SettingOutlined } from "@ant-design/icons";
import { useModel } from "@umijs/max";
import { Popconfirm, Space, Table, Tag, message } from "antd";
import type { ColumnsType } from "antd/es/table";

interface ListProps {
  data?: TYPE.Todo[];
  loading: boolean;
  setViewOpen: (value: boolean) => void;
  setinitValue: (value: TYPE.Todo) => void;
  title: string;
}

const UncompletedList: React.FC<ListProps> = ({
  loading,
  data,
  setinitValue,
  setViewOpen,
  title,
}) => {
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
      title: "优先级",
      dataIndex: "priority",
      key: "priority",
      width: 100,
      sorter: (a, b) => {
        if (a.priority && b.priority) {
          return a.priority - b.priority;
        }
        return 0;
      },
      render: (priority) => {
        const res = PRIORITY.find((item) => item.value === priority);
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
      render: (labels: TYPE.Label[]) => (
        <>
          {labels &&
            labels.map((label) => {
              return (
                <Tag color={label.color} key={label.id}>
                  {label.label}
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
      <span>
        <span style={{ color: "red" }}>{title && `${title} - `}</span>共{" "}
        {pageData.length} 条
      </span>
      <SettingOutlined style={{ fontSize: "14px" }} />
    </div>
  );

  return (
    <>
      <Table
        loading={loading}
        scroll={{ x: 1400 }}
        sticky
        columns={columns}
        dataSource={data}
        title={titleRender}
        pagination={title === "即将到期" ? false : {}}
      />
    </>
  );
};

export default UncompletedList;
