import { useRequest } from "ahooks";
import { sortBy } from "lodash";
import { useState } from "react";
import { User } from "../constants/types";
import { queryUsers } from "../services";

export default () => {
  const [data, setData] = useState<User[]>();
  const [rankUsers, setRankUsers] = useState<User[]>();

  // 按照粉丝量排序
  const getRankAuthor = (data) =>
    //  -item.read 代表逆序排序，即从大到小
    sortBy(data, (item) => -item.fans).map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

  // 更新所有数据
  const updateData = (res) => {
    setData(res);
    setRankUsers(getRankAuthor(res));
  };

  const { runAsync: getUsers } = useRequest((catelog) => queryUsers(catelog), {
    onSuccess(res: User[]) {
      if (!res) return;
      updateData(res);
    },
  });

  return {
    data,
    setData,
    getUsers,
    rankUsers,
  };
};
