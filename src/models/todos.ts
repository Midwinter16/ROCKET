import { queryTodos } from "@/services/todos";
import { useRequest } from "ahooks";
import { useState } from "react";

export default () => {
  const [todos, setTodos] = useState()
  const { loading } = useRequest(queryTodos, {
    onSuccess(res) {
      setTodos(res.data)
    }
  })
  const finished = todos.filter(todo => todo.finished)
  const unfinished = todos.filter(todo => !todo.finished)
  return {
    todos, setTodos, loading, finished, unfinished
  }
}