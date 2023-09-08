import * as icons from "@/assets/icons/index";
import { BarList } from "@/pages/community/constants";
import { useMemoizedFn } from "ahooks";
import { useState } from "react";
import { history } from "umi";
import styles from "./index.less";

const TopBar = () => {
  const inactiveList = Object.values(icons.default.inactive);
  const activeList = Object.values(icons.default.active);
  const itemList = BarList.map((item, index) => {
    return {
      icon: {
        active: activeList[index],
        inactive: inactiveList[index],
      },
      ...item,
    };
  });

  const module = window.location.pathname.split("/")[3];
  const defaultIndex = itemList.findIndex((item) => item.name === module);
  const [hover, setHover] = useState<number>(defaultIndex);
  const [active, setActive] = useState<number>(defaultIndex);
  const onChange = (path: string) => history.push(`/community/main/${path}`);
  const activeStatus = useMemoizedFn(
    (index: number) => hover === index || active === index,
  );

  return (
    <div className={styles["top-bar"]}>
      <div className={styles["top-bar-content"]}>
        {itemList.map((item, index) => {
          return (
            <div
              onMouseEnter={() => {
                setHover(index);
              }}
              onMouseLeave={() => {
                setHover(active);
              }}
              onClick={() => {
                setActive(index);
                onChange(item.name);
              }}
              key={index}
              className={`${styles["top-bar-item"]} ${
                active === index && styles["top-bar-item-active"]
              }`}
            >
              <span
                className={`${styles["top-bar-text"]} ${
                  activeStatus(index) && styles["active"]
                }`}
              >
                {item.cname}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopBar;
