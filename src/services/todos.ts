import { request } from "@umijs/max";

export const queryTodos = async () => {
  return request<TYPE.Todo>(`/api/todos`, {
    method: "GET",
  });
};
