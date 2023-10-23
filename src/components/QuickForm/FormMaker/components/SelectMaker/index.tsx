import { Input, Space } from "antd";
import { py } from "../../utils";

interface SelectMakerProps {
  value?: [];
  onChange?: (value: any) => void;
}

const SelectMaker: React.FC<SelectMakerProps> = ({ value = [], onChange }) => {
  const change = (str: string) => {
    const options = [...new Set(str.split("\n").filter((item) => !!item))];
    onChange?.(
      options.map((item) => ({
        label: item,
        value: py(item),
      })),
    );
  };
  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Input.TextArea
        autoSize={{ maxRows: 8 }}
        onChange={(e) => change(e.target.value)}
      />
    </Space>
  );
};

export default SelectMaker;
