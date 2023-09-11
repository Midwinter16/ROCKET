import { request } from "@umijs/max";
import { Label } from "../constants/types";

// 文章，
export const queryArticle = async (catelog: string) => {
  const { data } = await request(`/api/articles`, {
    method: "GET",
  });
  // 排除特殊路由
  if (["composite", "focus", "rank"].includes(catelog) || !catelog) return data;
  return [...data].filter((item) =>
    item.labels.some((label: Label) => label.value === catelog),
  );
};

// 所有类目
export const queryCatelogs = async () => {
  const { data } = await request(`/api/catelogs`, {
    method: "GET",
  });
  return data;
};

// 按照 catelogs 筛选用户
export const queryUsers = async (catelog: string) => {
  const { data } = await request(`/api/users`, {
    method: "GET",
  });
  // 排除特殊路由
  if (["composite", "focus", "rank"].includes(catelog) || !catelog) return data;
  return [...data].filter((item) => item.catelogs.includes(catelog));
};
