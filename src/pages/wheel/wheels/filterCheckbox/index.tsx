import { Button, Checkbox, Input, Space, message } from "antd";
import { useState } from "react";

const CheckboxGroup = Checkbox.Group;

type dataListProps = string;

// ahooks里有一个作用相同的钩子，useSelections

const FilterCheckbox = () => {
  const [checkList, setCheckList] = useState<dataListProps[]>([
    "type-1",
    "type-2",
    "type-3",
    "type-4",
    "type-5",
  ]);
  const [selectCheckList, setSelectCheckList] = useState<dataListProps[]>([]);
  const [type, setType] = useState("");

  const onChange = (list: any) => {
    setSelectCheckList(list);
  };

  const allChange = () => {
    if (selectCheckList.length !== checkList.length) {
      setSelectCheckList(checkList);
    } else {
      setSelectCheckList([]);
    }
  };

  // warning 报错: antd 表明静态函数无法像动态主题一样使用上下文。它建议使用 App 组件来解决这个问题
  const MessageComponent = () => {
    return (
      <Button
        onClick={() => {
          setCheckList((prev) => [...prev, type]);
          message.info(`add ${type} success`);
          setType("");
        }}
      >
        确认添加
      </Button>
    );
  };

  return (
    <div className="body-container">
      <Space direction="vertical">
        <Checkbox
          indeterminate={
            selectCheckList.length !== 0 &&
            selectCheckList.length !== checkList.length
          }
          checked={selectCheckList.length === checkList.length}
          onChange={allChange}
        >
          全选
        </Checkbox>
        <CheckboxGroup
          options={checkList}
          value={selectCheckList}
          onChange={(list) => onChange(list)}
        ></CheckboxGroup>
      </Space>
      <Input
        placeholder="添加分类"
        value={type}
        onChange={(e) => setType(e.target.value)}
      ></Input>
      <MessageComponent />
    </div>
  );
};

export default FilterCheckbox;
