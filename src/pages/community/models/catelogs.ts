import { getRoute } from "@/utils/utils";
import { history } from "@umijs/max";
import { useRequest } from "ahooks";
import { useEffect, useState } from "react";
import { Catelog, Label } from "../constants/types";
import { queryCatelogs } from "../services";

export default () => {
  const [data, setData] = useState<Catelog[]>();
  const [labels, setLabels] = useState<Label[]>();
  const [active, setActive] = useState<Label["value"]>("all");

  useRequest(queryCatelogs, {
    onSuccess(res) {
      if (!res) return;
      // fix 这里会有一个问题，如果第一次登录的页面不是 home 的话，例如是工具中的轮子，会获取不到数据，导致初始化失败，进而在第二次进 community 时会触发下面的 useEffect，data 为空然后报错
      // if (getRoute(2) !== "home") return; // fix
      setData(res);
      setLabels([...res].filter((item) => item.name === getRoute(3))[0].labels);
    },
  });

  useEffect(() => {
    return history.listen(async () => {
      if (getRoute(2) !== "home") return; // fix
      const catelog = getRoute(3);
      if (!catelog) return;
      setLabels([...data].filter((item) => item.name === catelog)[0].labels);
      setActive("all");
    });
  }, [data]);

  return {
    data,
    labels,
    active,
    setActive,
  };
};
