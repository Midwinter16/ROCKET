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
      if (getRoute(2) !== "main") return; // fix
      setData(res);
      setLabels([...res].filter((item) => item.name === getRoute(3))[0].labels);
    },
  });

  useEffect(() => {
    return history.listen(() => {
      if (getRoute(2) !== "main") return; // fix
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
