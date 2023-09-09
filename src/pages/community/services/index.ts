import { request } from "@umijs/max";

export const queryArticle = async () => {
  const { data } = await request<TYPE.Label>(`/api/articles`, {
    method: "GET",
  });
  return data;
};

export const queryRankArticle = async () => {
  // return request<TYPE.Label>(`/api/articles/rank`, {
  //   method: "GET",
  // });
  const { data } = await request(`/api/articles`, {
    method: "GET",
  });
  let rank = 0;
  return [...data]
    .sort((a, b) => b.read - a.read)
    .map((item) => ({
      ...item,
      rank: (rank += 1),
    }));
};

export const queryNewArticle = async () => {
  // return request<TYPE.Label>(`/api/articles/new`, {
  //   method: "GET",
  // });
  const { data } = await request(`/api/articles`, {
    method: "GET",
  });
  return [...data].sort((a, b) => b.create_at - a.create_at);
};

export const queryCatelogs = async () => {
  const { data } = await request(`/api/catelogs`, {
    method: "GET",
  });
  return data;
};

export const queryUsers = async () => {
  return request(`/api/users`, {
    method: "GET",
  });
};
