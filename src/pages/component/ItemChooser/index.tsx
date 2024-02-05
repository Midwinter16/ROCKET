// 选项选择器

import { SearchOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, message } from "antd";

import { useEffect, useMemo, useState } from "react";
import styles from "./index.less";

interface OptionProps {
  label: string;
  value: string;
}

interface ItemChooseProps {
  option: Array<OptionProps>;
  onOk?: (val: any) => void;
}

const ItemChoose: React.FC<ItemChooseProps> = (props) => {
  const { option: optionData, onOk } = props;

  const initOption = useMemo(
    () => optionData.map((item) => ({ ...item, checked: false })),
    [optionData],
  );

  const [search, setSearch] = useState<string>("");
  const [option, setOption] =
    useState<Array<OptionProps & { checked: boolean }>>(initOption);

  useEffect(() => {
    setOption(
      initOption.filter(
        (item) => search === "" || item.label.indexOf(search) !== -1,
      ),
    );
  }, [search]);

  const indeterminate = useMemo(
    () =>
      option.some((item) => item.checked) &&
      !option.every((item) => item.checked),
    [option],
  );
  const all = useMemo(
    () => option.length > 0 && option.every((item) => item.checked),
    [option],
  );

  const handleClick = (val: boolean, value: string) => {
    setOption((prev) => {
      prev.forEach((item) => {
        if (item.value === value) {
          item.checked = val;
        }
      });
      return [...prev];
    });
  };

  const handleAll = (val: boolean) => {
    setOption((prev) => {
      prev.forEach((item) => {
        item.checked = val;
      });
      return [...prev];
    });
  };

  const handleOk = () => {
    onOk?.(option);
  };

  return (
    <div className={styles["item-chooser"]}>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        prefix={<SearchOutlined />}
      />
      <div className={styles["tips"]}>{`共${option.length}条数据，其中选中了${
        option.filter((item) => item.checked).length
      }条数据`}</div>
      <div className={styles["body"]}>
        {option.map((item) => {
          return (
            <Checkbox
              onChange={(e) => handleClick(e.target.checked, item.value)}
              checked={item.checked}
              key={item.value}
            >
              {item.label}
            </Checkbox>
          );
        })}
      </div>
      <div className={styles["footer"]}>
        <div className={styles["all"]}>
          <Checkbox
            onChange={(e) => handleAll(e.target.checked)}
            indeterminate={indeterminate}
            checked={all}
          >
            全选
          </Checkbox>
        </div>
        <div className={styles["operator"]}>
          <Button size="small">取消</Button>
          <Button size="small" type="primary" onClick={handleOk}>
            确认
          </Button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const mock = [
    {
      label: "大猫",
      value: "bigcat",
    },
    {
      label: "小猫",
      value: "smallcat",
    },
    {
      label: "中猫",
      value: "middlecat",
    },
    {
      label: "呆猫",
      value: "spcat",
    },
  ];
  const onOk = () => {
    message.info("onOk");
  };
  return (
    <div>
      <ItemChoose option={mock} onOk={onOk} />
    </div>
  );
};

export default Home;
