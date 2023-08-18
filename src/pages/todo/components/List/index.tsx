import { SettingOutlined } from "@ant-design/icons";
import { Table, Tag, Space, Button, Row, Col } from "sensd";
import EditableViewer from "../EditableViewer";
import { useState } from "react";

interface TodoListProps {
  data: TYPE.TodoList,
  title: string,
  loading: boolean
}

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    ellipsis: true
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'steppeYellow' : 'auroraGreen';
          if (tag === 'loser') {
            color = 'lakeBlue';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>完成</a>
      </Space>
    ),
  },
];


const titleRender = pageData => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>共 {pageData.length} 条</span>
    <SettingOutlined style={{ fontSize: '14px' }} />
  </div >
);

const TodoList: React.FC<TodoListProps> = ({ loading, data, title }) => {

  const [visible, setVisible] = useState(false)

  return <>
    <Row justify="end" style={{ marginBottom: "10px" }}>
      <Col >
        <Button type="primary" onClick={() => setVisible(true)}>新增代办</Button>
      </Col>
    </Row>
    <Table skeleton={loading} sticky columns={columns} dataSource={data} title={titleRender} />
    <EditableViewer visible={visible} setVisible={setVisible} title={title}></EditableViewer>
  </>
}


export default TodoList