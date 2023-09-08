import { request } from "@umijs/max";

export const queryUsers = async () => {
  return request<TYPE.User>(`/api/user`, {
    method: "GET",
  });
};
