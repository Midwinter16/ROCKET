import { useRequest } from "ahooks";
import { useEffect, useState } from "react";
import { history } from "umi";
import { Article } from "../constants/types";
import { queryArticle } from "../services";

export default () => {
  const [data, setData] = useState<Article[]>();
  const [rankArticles, setRankArticles] = useState<Article[]>();
  const [newArticles, setNewArticles] = useState<Article[]>();

  // 按照阅读量排行
  const getRankArticle = (data) => {
    let rank = 0;
    return [...data]
      ?.sort((a, b) => b.read - a.read)
      .map((item) => ({
        ...item,
        rank: (rank += 1),
      }));
  };

  // 按照发布时间排行
  const getNewArticles = (data) => {
    return [...data].sort((a, b) => {
      return b.create_at - a.create_at;
    });
  };

  // 更新所有数据
  const updateData = (res) => {
    setData(res);
    setNewArticles(getNewArticles(res));
    setRankArticles(getRankArticle(res));
  };

  const { runAsync: getArticle } = useRequest(
    (catelog) => queryArticle(catelog),
    {
      onSuccess(res) {
        if (!res) return;
        updateData(res);
      },
      defaultParams: [history.location.pathname.split("/")[3]],
    },
  );

  useEffect(() => {
    // 获取不同类目下的文章
    history.listen(async ({ location }) => {
      const catelog = location.pathname.split("/")[3];
      await getArticle(catelog).then((res) => updateData(res));
    });
  });

  return {
    data,
    setData,
    getNewArticles,
    newArticles,
    rankArticles,
  };
};
