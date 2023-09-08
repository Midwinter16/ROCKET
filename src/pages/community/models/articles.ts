import { useRequest } from "ahooks";
import { useEffect, useState } from "react";
import { history } from "umi";
import { Article } from "../constants/types";
import { queryArticle } from "../services";

export default () => {
  const [data, setData] = useState<Article[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const { runAsync: getAllArticle } = useRequest(queryArticle, {
    onSuccess(res) {
      if (!res) return;
      setData(res.data);
    },
  });

  const getCatelog = async (catelog: string) => {
    setLoading(true);
    await getAllArticle().finally(() => {
      setLoading(false);
    });
    // 综合，关注，排行榜的逻辑不一致，综合展示全部数据，关注展示用户关注的标签，排行榜是一个新的页面
    if (["composite", "focus", "rank"].includes(catelog)) {
      setLoading(false);
      return;
    }
    await setData((prev) =>
      prev?.filter((item) =>
        item.labels.some((label) => label.value === catelog),
      ),
    );
  };

  // 按照阅读量排行
  const getRankArticle = () => {
    let rank = 0;
    return [...data]
      ?.sort((a, b) => b.read - a.read)
      .map((item) => ({
        ...item,
        rank: (rank += 1),
      }));
  };

  // 按照发布时间排行
  const getNewArticles = () => {
    return [...data].sort((a, b) => {
      return b.create_at - a.create_at;
    });
  };

  useEffect(() => {
    getCatelog(history.location.pathname.split("/")[3]);
    return history.listen(({ location }) => {
      const catelog = location.pathname.split("/")[3];
      getCatelog(catelog);
    });
  }, []);

  return {
    loading,
    data,
    setData,
    getCatelog,
    getRankArticle,
    getNewArticles,
  };
};
