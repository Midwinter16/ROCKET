import { useModel } from "@umijs/max";
import type { TabsProps } from "antd";
import { Button, Col, Row, Space, Tabs } from "antd";
import { useState } from "react";
import EditableViewer from "./components/EditableViewer";
import LabelDrawer from "./components/LabelDrawer";
import CompletedList from "./components/List/CompletedList";
import UncompletedList from "./components/List/UncompletedList";

const Todo = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [labelOpen, setlabelOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [initValue, setinitValue] = useState<TYPE.Todo>({});

  const { loading, completed, uncompleted } = useModel("todos", (model) => ({
    loading: model?.loading,
    completed: model?.getCompleted,
    uncompleted: model?.getUncompleted,
  }));

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "代办事项",
      children: (
        <UncompletedList
          data={uncompleted as TYPE.Todo[]}
          loading={loading}
          title={"新增代办"}
          setinitValue={setinitValue}
          setViewOpen={setViewOpen}
        />
      ),
    },
    {
      key: "2",
      label: "完成事项",
      children: (
        <CompletedList
          data={completed as TYPE.Todo[]}
          loading={loading}
          title={"事件查看"}
          setinitValue={setinitValue}
          setViewOpen={setViewOpen}
        />
      ),
    },
  ];
  return (
    <>
      <Row justify="end" style={{ marginBottom: "10px" }}>
        <Col>
          <Space>
            <Button type="default" onClick={() => setlabelOpen(true)}>
              标签管理
            </Button>
            <Button type="primary" onClick={() => setEditOpen(true)}>
              新增代办
            </Button>
          </Space>
        </Col>
      </Row>
      <Tabs defaultActiveKey="1" type="card" items={items}></Tabs>
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
      <LabelDrawer open={labelOpen} setOpen={setlabelOpen}></LabelDrawer>
    </>
  );
};

export default Todo;
