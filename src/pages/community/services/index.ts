import { request } from "@umijs/max";

export const queryArticle = async () => {
  return request<TYPE.Label>(`/api/articles`, {
    method: "GET",
  });
};

export const queryCatelogs = async () => {
  return request<TYPE.Label>(`/api/catelogs`, {
    method: "GET",
  });
};

export const queryUsers = async () => {
  return request<TYPE.Label>(`/api/users`, {
    method: "GET",
  });
};
