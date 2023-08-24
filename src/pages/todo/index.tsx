import { useModel } from "@umijs/max";
import type { TabsProps } from "antd";
import { Button, Col, Row, Space, Tabs, notification } from "antd";
import { useEffect, useState } from "react";
import completedIcon from "../../assets/completed.svg";
import expiredIcon from "../../assets/expired.svg";
import statisticsIcon from "../../assets/statistics.svg";
import unexpiredIcon from "../../assets/unexpired.svg";
import EditableViewer from "./components/EditableViewer";
import LabelDrawer from "./components/LabelDrawer";
import CompletedList from "./components/List/CompletedList";
import UncompletedList from "./components/List/UncompletedList";
import Statistics from "./components/Statistics";

const Todo = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [labelOpen, setlabelOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [activeTag, setActiveTag] = useState("1");
  const [initValue, setinitValue] = useState<TYPE.Todo>({});
  const { loading, completed, expirings, expireds, unexpireds } = useModel(
    "todos",
    (model) => ({
      loading: model.loading,
      completed: model.getCompleted,
      expirings: model.getExpirings,
      expireds: model.getExpireds,
      unexpireds: model.getUnexpireds,
    }),
  );

  // 提醒
  const [api, useContext] = notification.useNotification();
  const openNotification = (expirings: TYPE.Todo[]) => {
    if (expirings.length !== 0)
      api.warning({
        message: `待办到期提示`,
        description: `有${expirings.length}个待办即将到期，请留意截止时间`,
        placement: "top",
      });
  };

  useEffect(() => {
    openNotification(expirings as TYPE.Todo[]);
  }, [expirings]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <span>
          <Space>
            <img style={{ width: "17px" }} src={unexpiredIcon} />
            待办事项
          </Space>
        </span>
      ),
      children: (
        <>
          {expirings.length !== 0 && (
            <>
              <UncompletedList
                key={"expirings"}
                data={expirings as TYPE.Todo[]}
                loading={loading}
                setinitValue={setinitValue}
                setViewOpen={setViewOpen}
                title={"即将到期"}
              />
              <div style={{ margin: "20px 0" }}></div>
            </>
          )}
          <UncompletedList
            key={"unexpireds"}
            data={unexpireds as TYPE.Todo[]}
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
      label: (
        <span>
          <Space>
            <img style={{ width: "17px" }} src={expiredIcon} />
            逾期待办
          </Space>
        </span>
      ),
      children: (
        <UncompletedList
          title={""}
          data={expireds as TYPE.Todo[]}
          loading={loading}
          setinitValue={setinitValue}
          setViewOpen={setViewOpen}
        />
      ),
    },
    {
      key: "3",
      label: (
        <span>
          <Space>
            <img style={{ width: "17px" }} src={completedIcon} />
            完成事项
          </Space>
        </span>
      ),
      children: (
        <CompletedList
          data={completed as TYPE.Todo[]}
          loading={loading}
          setinitValue={setinitValue}
          setViewOpen={setViewOpen}
        />
      ),
    },

    {
      key: "4",
      label: (
        <span>
          <Space>
            <img style={{ width: "17px" }} src={statisticsIcon} />
            统计
          </Space>
        </span>
      ),
      children: <Statistics setActiveTag={setActiveTag} />,
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
      <Tabs
        onChange={(value) => setActiveTag(value)}
        defaultActiveKey={"1"}
        activeKey={activeTag}
        items={items}
      ></Tabs>
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
