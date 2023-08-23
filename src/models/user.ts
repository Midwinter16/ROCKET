import { queryUsers } from "@/services/user";
import { useRequest } from "ahooks";
import { useState } from "react";

export default () => {
  const [user, setUser] = useState<TYPE.User>();
  const { loading } = useRequest(queryUsers, {
    onSuccess(res) {
      if (!res) return;
      setUser(res);
    },
  });

  const getUser = user;

  return {
    loading,
    getUser,
    setUser,
  };
};
