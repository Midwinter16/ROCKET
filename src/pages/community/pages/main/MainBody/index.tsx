import { useModel, useOutletContext } from "@umijs/max";
import { Select, Skeleton, Tabs, TabsProps } from "antd";
import ArticleCardList from "./ArticleCardList";
import styles from "./index.less";

const MainBody = () => {
  const { labels, active, onChange,type } = useOutletContext();
  const { data, getNewArticles, loading } = useModel("community.articles");

  const ExtraSearch = () => {
    const options = labels;
    return (
      <Select
        style={{ width: "250px" }}
        defaultValue={active}
        options={options}
        value={active}
        onChange={(value) => onChange(value)}
      ></Select>
    );
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "推荐",
      children: loading ? <Skeleton active /> : <ArticleCardList data={data} />,
    },
    {
      key: "2",
      label: "最新",
      children: loading ? (
        <Skeleton active />
      ) : (
        <ArticleCardList data={getNewArticles()} />
      ),
    },
  ];

  return (
    <div className={styles["main-body"]}>
      <Tabs
        tabBarExtraContent={type === 'vertical' && <ExtraSearch labels={labels} />}
        items={items}
      ></Tabs>
    </div>
  );
};
export default MainBody;
