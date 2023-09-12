import { greetings } from "@/utils/utils";
import { useModel } from "@umijs/max";
import { Button, Card, Space } from "antd";
import ListCard from "./ListCard";
import styles from "./index.less";

const Info = () => {
  const { rankArticles } = useModel("community.articles");
  const { rankUsers } = useModel("community.authors");

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
        <ListCard type="ARTICLE" data={rankArticles}></ListCard>
        <ListCard type="USER" data={rankUsers}></ListCard>
        {/* <ListCard type="TOPIC"></ListCard> */}
      </Space>
    </div>
  );
};

export default Info;
