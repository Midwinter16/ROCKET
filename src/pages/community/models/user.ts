import { useRequest } from "ahooks";
import { useState } from "react";
import { User } from "../constants/types";
import { queryUser } from "../services";

export default () => {
  const [data, setData] = useState<User>();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const update = (res) => {
    setData(res);
  };

  useRequest((id = 66524286) => queryUser(id), {
    onSuccess(res) {
      if (res) update(res);
    },
  });

  return { data, setData, isLogin, setIsLogin };
};
