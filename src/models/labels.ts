import { queryLabels } from "@/services/global";
import { useRequest } from "ahooks";
import { useState } from "react";

export default () => {
  const [labels, setLabels] = useState<TYPE.Label[]>([]);

  const { loading } = useRequest(queryLabels, {
    onSuccess(res) {
      if (!res) return;
      setLabels(res.data);
    },
  });

  const addLabel = (newLabel: TYPE.Label) => {
    const repeat = labels.find((label) => label.value === newLabel.value);
    if (repeat) return repeat.value;
    setLabels((prevData) => [
      ...prevData,
      {
        id: labels.length + 1,
        ...newLabel,
      },
    ]);
  };

  const changeLabel = (newLabel: TYPE.Label, id: number) => {
    setLabels((prevData) =>
      prevData.map((label) => {
        if (id === label.id) {
          return {
            ...label,
            value: newLabel.value,
            label: newLabel.label,
            color: newLabel.color,
          };
        }
        return label;
      }),
    );
  };

  return {
    labels,
    addLabel,
    changeLabel,
    loading,
  };
};
