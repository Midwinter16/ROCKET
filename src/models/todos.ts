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
  const deleteTodo = (id: number | undefined) => {
    if (!id) throw new Error("id 失效");
    setTodos((prevData) => prevData.filter((todo) => todo.id !== id));
  };

  const getCompleted = formatTodo(todos)?.filter((todo) => todo.completed);
  const getUncompleted = formatTodo(todos)?.filter((todo) => !todo.completed);

  return {
    todos,
    setTodos,
    addTodo,
    completedTodo,
    deleteTodo,
    loading,
    getCompleted,
    getUncompleted,
  };
};
