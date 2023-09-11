import SIcon from "@/components/SIcon";
import tixingIcon from "@icons/tixing.svg";
import { history } from "@umijs/max";
import { Popover } from "antd";
import styles from "./index.less";

const Alarm = () => {
  const alarmList = ["评论", "赞和收藏", "新增粉丝", "私信", "系统通知"];
  const content = (
    <div className={styles["popover-content"]}>
      {alarmList.map((item, index) => (
        <div
          onClick={() => {
            history.push("/community/notification");
          }}
          className={styles["popover-item"]}
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
  return (
    <>
      <Popover content={content} trigger={"hover"}>
        <SIcon icon={tixingIcon} size="small" count={10}></SIcon>
      </Popover>
    </>
  );
};

export default Alarm;
