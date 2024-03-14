// 分类展示器

import { ReactNode, useMemo } from "react";
import styles from "./index.less";

interface OptionProps {
  cname: string;
  name: string;
  value?: string | number;
  children?: Array<OptionProps>;
}

interface SortingListProps {
  option: Array<OptionProps>;
  titleRender?: (val: any) => ReactNode;
  valueRender?: (val: any) => ReactNode;
}

const SortingList: React.FC<SortingListProps> = (props) => {
  const { option, valueRender, titleRender } = props;

  const count = useMemo(() => {
    return option.reduce((acc, item) => {
      acc += item?.children?.length || 0;
      return acc;
    }, 0);
  }, [option]);

  return (
    <div className={styles["sorting-list"]}>
      <span className={styles["count"]}>{`共 ${count} 条数据`}</span>
      <div className={styles["class"]}>
        {option.map((item) => {
          return (
            <>
              <div key={item.name} className={styles["title"]}>
                {titleRender?.(item.cname) || item.cname}
              </div>
              {item?.children?.map((item) => {
                return (
                  <div className={styles["item"]}>
                    <span className={styles["item-title"]}>{item.cname}</span>
                    <span className={styles["item-value"]}>
                      {valueRender?.(item.value) || item.value}
                    </span>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

const Home = () => {
  const option = [
    {
      cname: "一级",
      name: "level1",
      children: [
        {
          cname: "呆猫",
          name: "spcat",
          value: 123,
        },
        {
          cname: "大猫",
          name: "bigcat",
          value: 321,
        },
        {
          cname: "小猫",
          name: "smallcat",
          value: 111,
        },
      ],
    },
    {
      cname: "二级",
      name: "level2",
      children: [
        {
          cname: "哈哈",
          name: "haha",
          value: 333123,
        },
        {
          cname: "嘿嘿",
          name: "heihei",
          value: 1231231231231,
        },
      ],
    },
  ];
  return (
    <SortingList
      option={option}
      titleRender={(val) => (
        <div>
          {"自定义类别展示"}:{val}
        </div>
      )}
      valueRender={(val) => (
        <div>
          {"自定义值展示"}:{val}
        </div>
      )}
    />
  );
};

export default Home;
