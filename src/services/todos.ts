import { request } from "@umijs/max";

export const queryTodos = async () => {
  return request<TYPE.TodoList>(`api/todos`, {
    method: 'GET',
  });
}