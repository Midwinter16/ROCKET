import { useModel } from "@umijs/max";
import type { TabsProps } from "antd";
import { Button, Col, Row, Space, Tabs, notification } from "antd";
import { useEffect, useState } from "react";
import EditableViewer from "./components/EditableViewer";
import LabelDrawer from "./components/LabelDrawer";
import CompletedList from "./components/List/CompletedList";
import UncompletedList from "./components/List/UncompletedList";

const Todo = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [labelOpen, setlabelOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [initValue, setinitValue] = useState<TYPE.Todo>({});
  const { loading, completed, uncompleted, expiry } = useModel(
    "todos",
    (model) => ({
      loading: model?.loading,
      completed: model?.getCompleted,
      uncompleted: model?.getUncompleted,
      expiry: model?.getExpiry,
    }),
  );

  // 提醒
  const [api, useContext] = notification.useNotification();
  const openNotification = (expiry: TYPE.Todo[]) => {
    if (expiry.length !== 0)
      api.warning({
        message: `待办到期提示`,
        description: `有${expiry.length}个待办即将到期，请留意截止时间`,
        placement: "top",
      });
  };

  useEffect(() => {
    openNotification(expiry as TYPE.Todo[]);
  }, []);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "待办事项",
      children: (
        <>
          {expiry.length !== 0 && (
            <>
              <UncompletedList
                data={expiry as TYPE.Todo[]}
                loading={loading}
                setinitValue={setinitValue}
                setViewOpen={setViewOpen}
                title={"即将到期"}
              />
              <div style={{ margin: "20px 0" }}></div>
            </>
          )}
          <UncompletedList
            data={uncompleted as TYPE.Todo[]}
            loading={loading}
            setinitValue={setinitValue}
            setViewOpen={setViewOpen}
            title={""}
          />
        </>
      ),
    },
    {
      key: "2",
      label: "完成事项",
      children: (
        <CompletedList
          data={completed as TYPE.Todo[]}
          loading={loading}
          setinitValue={setinitValue}
          setViewOpen={setViewOpen}
        />
      ),
    },
  ];
  return (
    <>
      {/* 到期提示 */}
      {useContext}
      <Row justify="end" style={{ marginBottom: "10px" }}>
        <Col>
          <Space>
            <Button type="default" onClick={() => setlabelOpen(true)}>
              标签管理
            </Button>
            <Button type="primary" onClick={() => setEditOpen(true)}>
              新增待办
            </Button>
          </Space>
        </Col>
      </Row>
      <Tabs defaultActiveKey="1" type="card" items={items}></Tabs>
      <EditableViewer
        open={editOpen}
        setOpen={setEditOpen}
        title="新增待办"
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
