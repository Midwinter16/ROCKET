import { request } from "@umijs/max";

export const queryLabels = async () => {
  return request<TYPE.Label>(`/api/labels`, {
    method: "GET",
  });
};
