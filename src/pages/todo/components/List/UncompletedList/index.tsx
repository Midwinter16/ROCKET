import { SettingOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import EditableViewer from "../../EditableViewer";

interface ListProps {
  data?: TYPE.Todo[];
  title: string;
  loading: boolean;
}

const columns: ColumnsType<TYPE.Todo> = [
  {
    title: "名称",
    dataIndex: "title",
    key: "title",
    width: 200,
    render: (text: string) => <a>{text}</a>,
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
        {labels.map((tag) => {
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
    title: "Action",
    key: "action",
    fixed: "right",
    width: 100,
    render: () => (
      <Space size="middle">
        <a>完成</a>
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

const UncompletedList: React.FC<ListProps> = ({ loading, data, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row justify="end" style={{ marginBottom: "10px" }}>
        <Col>
          <Button type="primary" onClick={() => setOpen(true)}>
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
        open={open}
        setOpen={setOpen}
        title={title}
      ></EditableViewer>
    </>
  );
};

export default UncompletedList;
