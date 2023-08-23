import { queryTodos } from "@/services/todos";
import { formatTime } from "@/utils/utils";
import { useRequest } from "ahooks";
import moment from "moment";
import { useState } from "react";

export default () => {
  const [todos, setTodos] = useState<TYPE.Todo[]>([]);
  const { loading } = useRequest(queryTodos, {
    onSuccess(res) {
      if (!res) return;
      setTodos(res.data);
    },
  });

  // 格式化待办
  const formatTodo = (todos: TYPE.Todo[]) => {
    // 时间戳格式化
    return todos.map((todo: TYPE.Todo) => {
      return {
        ...todo,
        deadline: formatTime(todo.deadline),
        remindTime: formatTime(todo.remindTime),
        createTime: formatTime(todo.createTime),
        completed: formatTime(todo.completed),
        key: todo.id,
      };
    });
  };
  // 添加待办
  const addTodo = (todo: TYPE.Todo) => {
    const formatTodo = {
      id: todos?.length + 1,
      title: "",
      description: "",
      createTime: moment().valueOf(),
      deadline: undefined,
      priority: 1,
      completed: undefined,
      remindTime: undefined,
      labels: [],
      ...todo,
    };
    setTodos([...todos, formatTodo]);
  };
  // 待办状态从未完成到完成
  const completedTodo = (id: number | undefined) => {
    if (!id) throw new Error("id 失效");
    setTodos((prevData) => {
      return prevData.map((todo) => {
        if (todo.id === id) {
          todo.completed = moment().valueOf();
        }
        return todo;
      });
    });
  };
  // 删除待办
  const deleteTodo = (id: number | undefined) => {
    if (!id) throw new Error("id 失效");
    setTodos((prevData) => prevData.filter((todo) => todo.id !== id));
  };

  // 获取已完成待办
  const getCompleted = formatTodo(todos)?.filter((todo) => todo.completed);
  // 获取未完成待办
  const getUncompleted = formatTodo(todos)?.filter((todo) => !todo.completed);
  // 获取触发提醒的待办
  const getExpirings = formatTodo(
    todos.filter((todo) => {
      const current = moment().valueOf();
      if (todo.deadline && todo.remindTime)
        return todo.remindTime < current && current < todo.deadline;
      return false;
    }),
  );
  // 获取逾期待办
  const getExpireds = formatTodo(
    todos.filter((todo) => {
      const current = moment().valueOf();
      if (todo.deadline && todo.remindTime) return current > todo.deadline;
      return false;
    }),
  );
  // 获取未逾期待办
  const getUnexpireds = formatTodo(
    todos.filter((todo) => {
      const current = moment().valueOf();
      if (todo.deadline && todo.remindTime) return current < todo.deadline;
      return false;
    }),
  );
  // 获取最快到期待办
  const getExpiring = (() => {
    const unexpired = todos.filter((todo) => {
      const current = moment().valueOf();
      if (todo.deadline && todo.remindTime) return current < todo.deadline;
      return false;
    });
    if (unexpired.length === 0) return null;
    if (unexpired.length === 1) return unexpired[0];
    return formatTodo([
      unexpired.reduce((target, todo) => {
        if (target?.deadline > todo?.deadline) return todo;
        return target;
      }, unexpired[0]),
    ])[0];
  })();

  return {
    todos,
    setTodos,
    addTodo,
    completedTodo,
    deleteTodo,
    loading,
    getCompleted,
    getUncompleted,
    getExpirings,
    getExpireds,
    getUnexpireds,
    getExpiring,
  };
};
