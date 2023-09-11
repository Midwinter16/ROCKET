import { getRoute } from "@/utils/utils";
import { history } from "@umijs/max";
import { useRequest } from "ahooks";
import { useEffect, useState } from "react";
import { User } from "../constants/types";
import { queryUsers } from "../services";

export default () => {
  const [data, setData] = useState<User[]>();
  const [rankUsers, setRankUsers] = useState<User[]>();

  // 按照粉丝量排序
  const getRankAuthor = (data) => {
    return [...data]
      ?.sort((a, b) => b.fans - a.fans)
      .map((item, index) => ({
        ...item,
        rank: index + 1,
      }));
  };

  // 更新所有数据
  const updateData = (res) => {
    setData(res);
    setRankUsers(getRankAuthor(res));
  };

  const { runAsync: getUsers } = useRequest((catelog) => queryUsers(catelog), {
    onSuccess(res) {
      if (!res) return;
      if (getRoute(2) !== "main") return; // fix
      updateData(res);
    },
    defaultParams: [getRoute(3)],
  });

  useEffect(() => {
    // 获取不同类目下的作者
    history.listen(async () => {
      if (getRoute(2) !== "main") return; // fix
      const catelog = getRoute(3);
      await getUsers(catelog).then((res) => updateData(res));
    });
  });

  return {
    data,
    setData,
    rankUsers,
  };
};
