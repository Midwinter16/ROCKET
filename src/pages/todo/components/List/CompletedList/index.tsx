import { PRIORITY } from "@/constants";
import { SettingOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";

interface ListProps {
  data?: TYPE.Todo[];
  loading: boolean;
  setViewOpen: (value: boolean) => void;
  setinitValue: (value: TYPE.Todo) => void;
}

const CompletedList: React.FC<ListProps> = ({
  loading,
  data,
  setinitValue,
  setViewOpen,
}) => {
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
      title: "完成时间",
      dataIndex: "completed",
      key: "completed",
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
      render: () => (
        <Space size="middle">
          <a>暂定</a>
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
      <Table
        loading={loading}
        scroll={{ x: 1400 }}
        sticky
        columns={columns}
        dataSource={data}
        title={titleRender}
      />
    </>
  );
};

export default CompletedList;
