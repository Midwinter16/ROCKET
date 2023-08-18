import { Tabs } from "sensd"
import TodoList from "./components/List"
import { useModel } from "@umijs/max"


const Todo = () => {
  const { loading, unfinished, finished } = useModel('todos', model => ({
    loading: model.loading,
    unfinished: model.unfinished,
    finished: model.finished
  }))
  return (
    <>
      <Tabs defaultActiveKey="1" >
        <Tabs.TabPane tab="代办事项" key="1">
          <TodoList data={unfinished} loading={loading} title={'新增代办'} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="完成事项" key="2">
          <TodoList data={finished} loading={loading} title={'事件查看'} />
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}

export default Todo