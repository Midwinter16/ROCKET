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
      setData(res);
      setLabels(
        [...res].filter(
          (item) => item.name === location.pathname.split("/")[3],
        )[0].labels,
      );
    },
  });

  useEffect(() => {
    return history.listen(() => {
      const catelog = location.pathname.split("/")[3];
      if (!catelog) return;
      data &&
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
