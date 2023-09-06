import { Button, Card } from "antd";
import moment from "moment";
import styles from "./index.less";

const Rank = () => {
  const greetings = () => {
    const hour = moment().hours();
    return hour >= 6 && hour < 12
      ? "早上好"
      : hour >= 12 && hour < 14
      ? "中午好"
      : hour >= 14 && hour < 18
      ? "下午好"
      : "晚上好";
  };
  return (
    <div className={styles["rank-body"]}>
      <Card>
        <div className={styles["hello-body"]}>
          <div className="hello-text">
            <div style={{ fontSize: "16px", fontWeight: 500 }}>
              {greetings()}
            </div>
            <div>fxxk life</div>
          </div>
          <Button type="primary">去签到</Button>
        </div>
      </Card>
    </div>
  );
};

export default Rank;
