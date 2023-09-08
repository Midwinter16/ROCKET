import { useRequest } from "ahooks";
import { useState } from "react";
import { User } from "../constants/types";
import { queryUsers } from "../services";

export default () => {
  const [data, setData] = useState<User[]>();
  const { runAsync: getAllUsers, loading } = useRequest(queryUsers, {
    onSuccess(res) {
      if (!res) return;
      setData(res.data);
    },
  });

  const getRankUser = () => {
    let rank = 0;
    return data
      ?.sort((a, b) => b.fans - a.fans)
      .map((item) => ({
        ...item,
        rank: (rank += 1),
      }));
  };

  return {
    data,
    setData,
    getRankUser,
  };
};
