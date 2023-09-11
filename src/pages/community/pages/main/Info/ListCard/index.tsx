import SIcon from "@/components/SIcon";
import { Article, User } from "@/pages/community/constants/types";
import { approximate, ellipsis } from "@/utils/utils";
import articleIcon from "@icons/article.svg";
import { Card } from "antd";
import styles from "./index.less";

/**
 * data：传递进来的数据
 * count：最大展示数据数，默认为 5
 * type：传递数据的类型
 */
interface ListCardProps {
  data: any;
  count?: number;
  type: "USER" | "TOPIC" | "ARTICLE";
}

// 后期数据完善删除 mock
const mocktopicitem = new Array(10).fill(0).map((_, index) => ({
  id: index,
  title: `标题${index}`,
  label: "propose", // propose | reward | null
  reads: 100,
}));

const ArticleItem = ({ data }: { data: Article[] }) => {
  return data.map((item: any) => (
    <div key={item.id} className={styles["article-item"]}>
      <div style={{ width: "20px", paddingRight: "10px" }}>{item.rank}</div>
      <div className={styles["article-item-title"]}>
        {ellipsis(item.title, 12)}
      </div>
      <div style={{ width: "50px" }}>{approximate(item.read)}</div>
    </div>
  ));
};

const UserItem = ({ data }: { data: User[] }) => {
  return data.map((item: any) => (
    <div key={item.id} className={styles["user-item"]}>
      <SIcon icon={articleIcon} size="tiny"></SIcon>
      <div className={styles["user-item-text"]}>
        <div style={{ fontSize: "14px" }}>{item.cname}</div>
        <div style={{ opacity: 0.7, fontSize: "12px" }}>
          {ellipsis(item.description, 10)}
        </div>
      </div>
      <div className={styles["user-item-follow"]}> + 关注</div>
    </div>
  ));
};

const TopicItem = ({ data }: { data: any }) => {
  return data.map((item: any) => (
    <div key={item.id} className={styles["topic-item"]}>
      {item.label && (
        <div className={styles["topic-item-label"]}>
          {item.label === "propose" ? "荐" : "奖"}
        </div>
      )}
      <div className={styles["topic-item-title"]}>{`#${item.title}#`}</div>
      <div>{item.reads}</div>
    </div>
  ));
};

const ListCardType = {
  USER: {
    title: "作者榜",
    icon: articleIcon,
    Component: (props: any) => <UserItem {...props} />,
  },
  TOPIC: {
    title: "推荐话题",
    icon: null,
    data: mocktopicitem,
    Component: (props: any) => <TopicItem {...props} />,
  },
  ARTICLE: {
    title: "文章榜",
    icon: articleIcon,
    Component: (props: any) => <ArticleItem {...props} />,
  },
};

const ListCard: React.FC<ListCardProps> = (props) => {
  const { count = 5, type, data } = props; // 未来限制数据条数放到后端去做
  const { title, icon, Component } = ListCardType[type];
  return (
    <Card bodyStyle={{ padding: "15px" }} className={styles["card-body"]}>
      <div className={styles["body-header"]}>
        {icon ? (
          <SIcon icon={icon} size="tiny" title={title} fontsize={16}></SIcon>
        ) : (
          <div style={{ fontSize: "16px" }}>{title}</div>
        )}
      </div>
      <div className={styles["body-main"]}>
        {data && <Component data={data.slice(0, count)}></Component>}
      </div>
      <div className={styles["body-footer"]}>查看更多</div>
    </Card>
  );
};

export default ListCard;
