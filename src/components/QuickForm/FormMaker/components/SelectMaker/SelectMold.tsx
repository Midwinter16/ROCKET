import { Select } from "antd";
import { useEffect, useState } from "react";

interface SelectMoldProps {
  value: [];
}

const SelectMold: React.FC<SelectMoldProps> = ({ value: options }) => {
  const [value, setValue] = useState(options?.[0]);

  useEffect(() => {
    setValue(options?.[0]);
  }, [options]);

  return (
    <Select
      onChange={(e) => setValue(e)}
      value={value}
      defaultValue={value}
      options={options}
    ></Select>
  );
};

export default SelectMold;
