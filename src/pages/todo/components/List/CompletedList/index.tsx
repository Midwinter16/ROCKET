import { PRIORITY } from "@/constants";
import { SettingOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import EditableViewer from "../../EditableViewer";

interface ListProps {
  data?: TYPE.Todo[];
  title: string;
  loading: boolean;
}

const CompletedList: React.FC<ListProps> = ({ loading, data }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [initValue, setinitValue] = useState<TYPE.Todo>({});

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
      title: "完成时间",
      dataIndex: "completed",
      key: "completed",
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

export default CompletedList;
