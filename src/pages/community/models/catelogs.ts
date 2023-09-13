import { getRoute } from "@/utils/utils";
import { useRequest } from "ahooks";
import { useState } from "react";
import { Catelog, Label } from "../constants/types";
import { queryCatelogs } from "../services";

export default () => {
  const [data, setData] = useState<Catelog[]>();
  const [labels, setLabels] = useState<Label[]>();
  const [active, setActive] = useState<Label["value"]>("all");

  const updateData = (res) => {
    setData(res);
    const catelog = getRoute(3);
    if (!catelog) return;
    setLabels([...res].filter((item) => item.name === getRoute(3))[0].labels);
  };

  const { runAsync: getCatelogs } = useRequest(queryCatelogs, {
    onSuccess(res) {
      if (!res) return;
      updateData(res);
    },
  });

  return {
    data,
    labels,
    active,
    getCatelogs,
    setActive,
  };
};
