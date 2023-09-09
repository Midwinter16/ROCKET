import { Article } from "@/pages/community/constants/types";
import { delay } from "lodash";
import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./index.less";

const ArticleCardList = forwardRef((props: any) => {
  const { data } = props;

  return (
    <div className={styles["card-list-body"]}>
      {data && data.map((item: Article) => (
        <div  key={item.id} className={styles["card-item"]}>
          <div  className={styles["card-text"]}>
            <div className={styles["card-title"]}>{item.title}</div>
            <div
              className={styles["card-abstract"]}
            >
              {/* 有摘要的情况下不显示 content */}
              {item.content}
            </div>
            <div className={styles["card-info"]}></div>
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
