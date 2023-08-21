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
      // 时间戳格式化
      setTodos(res.data);
    },
  });

  const formatTodo = (todos) => {
    return todos.map((todo: TYPE.Todo) => {
      return {
        ...todo,
        deadline: formatTime(todo.deadline),
        remindTime: formatTime(todo.remindTime),
        createTime: formatTime(todo.createTime),
        completed: formatTime(todo.completed),
        key: todo.id,
        priority: `P${todo.priority}`,
      };
    });
  };
  const addTodo = (todo) => {
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
    console.log(formatTodo);
    setTodos([...todos, formatTodo]);
  };

  const getCompleted = formatTodo(todos)?.filter((todo) => todo.completed);
  const getUncompleted = formatTodo(todos)?.filter((todo) => !todo.completed);

  return {
    todos,
    setTodos,
    addTodo,
    loading,
    getCompleted,
    getUncompleted,
  };
};
