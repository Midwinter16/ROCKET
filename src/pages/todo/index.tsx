import { useModel } from "@umijs/max";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import CompletedList from "./components/List/CompletedList";
import UncompletedList from "./components/List/UncompletedList";

const Todo = () => {
  const { loading, completed, uncompleted } = useModel("todos", (model) => ({
    loading: model.loading,
    completed: model.completed,
    uncompleted: model.uncompleted,
  }));

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "代办事项",
      children: (
        <UncompletedList
          data={uncompleted}
          loading={loading}
          title={"新增代办"}
        />
      ),
    },
    {
      key: "2",
      label: "完成事项",
      children: (
        <CompletedList data={completed} loading={loading} title={"事件查看"} />
      ),
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="1" type="card" items={items}></Tabs>
    </>
  );
};

export default Todo;
