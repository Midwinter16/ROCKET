import { Button, Card, Space } from "antd";
import moment from "moment";
import ListCard from "./ListCard";
import styles from "./index.less";

const Info = () => {
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
      <Space direction="vertical" style={{ width: "100%" }}>
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
        <ListCard type="ARTICLE"></ListCard>
        <ListCard type="USER"></ListCard>
        <ListCard type="TOPIC"></ListCard>
      </Space>
    </div>
  );
};

export default Info;
