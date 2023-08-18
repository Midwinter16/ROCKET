import { queryTodos } from "@/services/todos";
import { useRequest } from "ahooks";
import moment from "moment";
import { useState } from "react";

export default () => {
  const [todos, setTodos] = useState<TYPE.Todo[]>();
  const { loading } = useRequest(queryTodos, {
    onSuccess(res) {
      if (!res) return;
      // 时间戳格式化
      const formatData = res.data.map((todo: TYPE.Todo) => {
        return {
          ...todo,
          deadline: moment(todo.deadline).format("YYYY-MM-DD HH:mm:SS"),
          remindTime: moment(todo.remindTime).format("YYYY-MM-DD HH:mm:SS"),
          createTime: moment(todo.createTime).format("YYYY-MM-DD HH:mm:SS"),
          completed:
            todo.completed &&
            moment(todo.completed).format("YYYY-MM-DD HH:mm:SS"),
          key: todo.id,
        };
      });
      setTodos(formatData);
    },
  });
  const completed = todos?.filter((todo) => todo.completed);
  const uncompleted = todos?.filter((todo) => !todo.completed);
  return {
    todos,
    setTodos,
    loading,
    completed,
    uncompleted,
  };
};
