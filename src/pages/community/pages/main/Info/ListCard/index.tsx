import SIcon from "@/components/SIcon";
import articleIcon from "@/pages/community/assets/imgs/article.svg";
import userIcon from "@/pages/community/assets/imgs/user.svg";
import { Card } from "antd";
import styles from "./index.less";

/**
 * data：传递进来的数据
 * count：最大展示数据数，默认为 5
 * type：传递数据的类型
 */
interface ListCardProps {
  data?: any;
  count?: number;
  type: "USER" | "TOPIC" | "ARTICLE";
}

// 后期数据完善删除 mock
const mockuseritem = new Array(10).fill(0).map((_, index) => ({
  id: index,
  username: `账号名字${index}`,
  description: `介绍文字${index}`,
  icon: userIcon,
}));
const mockarticleitem = new Array(10).fill(0).map((_, index) => ({
  id: index,
  title: `title${index}`,
}));
const mocktopicitem = new Array(10).fill(0).map((_, index) => ({
  id: index,
  title: `标题${index}`,
  label: "propose", // propose | reward | null
  reads: 100,
}));

const UserItem = ({ data }: { data: any }) => {
  return data.map((item: any) => (
    <div key={item.id} className={styles["user-item"]}>
      <SIcon icon={item.icon} size="tiny"></SIcon>
      <div className={styles["user-item-text"]}>
        <div style={{ fontSize: "14px" }}>{item.username}</div>
        <div style={{ opacity: 0.7, fontSize: "12px" }}>{item.description}</div>
      </div>
      <div className={styles["user-item-follow"]}> + 关注</div>
    </div>
  ));
};

const ArticleItem = ({ data }: { data: any }) => {
  const ellipsis = (text: string) => {
    if (text.length > 12) return `${text.slice(0, 12)}...`;
    return text;
  };
  return data.map((item: any) => (
    <div key={item.id} className={styles["article-item"]}>
      <div style={{ width: "20px", paddingRight: "10px" }}>{item.id}</div>
      <div className={styles["article-item-title"]}>{ellipsis(item.title)}</div>
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
    data: mockuseritem,
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
    data: mockarticleitem,
    Component: (props: any) => <ArticleItem {...props} />,
  },
};

const ListCard: React.FC<ListCardProps> = (props) => {
  const { count = 5, type } = props; // 未来限制数据条数放到后端去做
  const { title, icon, data, Component } = ListCardType[type];
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
        <Component data={data.slice(0, count)}></Component>
      </div>
      <div className={styles["body-footer"]}>查看更多</div>
    </Card>
  );
};

export default ListCard;
