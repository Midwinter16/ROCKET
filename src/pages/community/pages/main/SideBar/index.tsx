import SIcon from "@/components/SIcon";
import { SideBarList } from "@/pages/community/constants";
import { useMemoizedFn } from "ahooks";
import { useState } from "react";
import { history } from "umi";
import * as icons from "../../../assets/imgs/index";
import styles from "./index.less";

const SideBar = () => {
  const inactiveList = Object.values(icons.default.inactive);
  const activeList = Object.values(icons.default.active);
  const itemList = SideBarList.map((item, index) => {
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
    <div className={styles["side-bar"]}>
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
            className={`${styles["side-bar-item"]} ${
              active === index && styles["side-bar-item-active"]
            }`}
          >
            <SIcon
              key={index}
              size="tiny"
              icon={activeStatus(index) ? item.icon.active : item.icon.inactive}
            ></SIcon>
            <span
              style={{ padding: "0 0 0 20px", fontSize: "20px" }}
              className={`${activeStatus(index) && styles["active"]}`}
            >
              {item.cname}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
