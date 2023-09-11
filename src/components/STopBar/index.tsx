import { useMemoizedFn } from "ahooks";
import { useState } from "react";
import styles from "./index.less";

interface TopBarProps {
  data: {
    cname: string;
    name: string;
  }[];
  module: string;
  onChange: (value: string) => void;
}

const STopBar: React.FC<TopBarProps> = ({ data, module, onChange }) => {
  const defaultIndex = data.findIndex((item) => item.name === module);
  const [hover, setHover] = useState<number>(defaultIndex);
  const [active, setActive] = useState<number>(defaultIndex);
  const activeStatus = useMemoizedFn(
    (index: number) => hover === index || active === index,
  );

  return (
    <div className={styles["top-bar"]}>
      <div className={styles["top-bar-content"]}>
        {data.map((item, index) => {
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

export default STopBar;
