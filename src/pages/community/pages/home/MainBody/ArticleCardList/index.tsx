import SIcon from "@/components/SIcon";
import { Article } from "@/pages/community/constants/types";
import { queryUser } from "@/pages/community/services";
import { approximate } from "@/utils/utils";
import dianzanIcon from "@icons/dianzan.svg";
import liulanIcon from "@icons/liulan.svg";
import { useRequest } from "ahooks";
import { forwardRef } from "react";
import styles from "./index.less";

const ArticleCardList = forwardRef((props: any) => {
  const { data } = props;

  return (
    <div className={styles["card-list-body"]}>
      {data &&
        data.map((item: Article) => (
          <div key={item.id} className={styles["card-item"]}>
            <div className={styles["card-text"]}>
              <div className={styles["card-title"]}>{item.title}</div>
              <div className={styles["card-abstract"]}>
                {/* 有摘要的情况下不显示 content */}
                {item.content}
              </div>
              <div className={styles["card-info"]}>
                <div className={styles["text-info"]}>
                  <div>{`username`}</div>
                  <div>|</div>
                  <SIcon
                    icon={liulanIcon}
                    size="mini"
                    title={approximate(item.read)}
                  ></SIcon>
                  <SIcon
                    icon={dianzanIcon}
                    size="mini"
                    title={approximate(item.like)}
                  ></SIcon>
                </div>
                <div className={styles["label-info"]}>
                  {item.labels.map((item) => {
                    return (
                      <div className={styles["label-item"]} key={item.value}>
                        {item.label}
                      </div>
                    );
                  })}
                </div>
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
});

export default ArticleCardList;
