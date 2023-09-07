import { Select, Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";
import { history } from "umi";
import styles from "./index.less";

const MainBody = () => {
  const [pathname, setPathname] = useState();
  useEffect(() => {
    return history.listen(({ location }) => {
      setPathname(location.pathname);
    });
  }, []);

  const ArticleCardList = (props) => {
    const { data } = props;
    return (
      <div className={styles["card-list-body"]}>
        {new Array(10).fill(0).map((_, index) => (
          <div key={index} className={styles["card-item"]}>
            <div className={styles["card-text"]}>
              <div className={styles["card-title"]}>标题标题标题标题标题</div>
              <div className={styles["card-abstract"]}>
                摘要摘要摘要摘要摘要摘要
              </div>
              <div className={styles["card-info"]}>
                ininfoinfoinfoinfoinfofo
              </div>
            </div>
            <img
              className={styles["card-img"]}
              src="https://img1.baidu.com/it/u=4159158149,2237302473&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
            />
          </div>
        ))}
      </div>
    );
  };

  const ExtraSearch = () => {
    const options = [
      {
        label: "全部",
        value: "all",
      },
      {
        label: "前端",
        value: "front-end",
      },
      {
        label: "后端",
        value: "back-end",
      },
    ];
    return (
      <Select
        style={{ width: "250px" }}
        defaultValue="all"
        options={options}
      ></Select>
    );
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "推荐",
      children: <ArticleCardList />,
    },
    {
      key: "2",
      label: "最新",
      children: <ArticleCardList />,
    },
  ];

  return (
    <div className={styles["main-body"]}>
      <Tabs tabBarExtraContent={<ExtraSearch />} items={items}></Tabs>
    </div>
  );
};
export default MainBody;
