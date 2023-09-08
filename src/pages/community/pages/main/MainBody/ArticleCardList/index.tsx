import { Article } from "@/pages/community/constants/types";
import { delay } from "lodash";
import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./index.less";

const ArticleCardList = forwardRef((props: any) => {
  const { data } = props;
  const [width, setWidth] = useState(0);
  const mainRef = useRef(null);
  const textRef = useRef(null);

  const onChange = () => {
    if (!mainRef.current) return;
    const contentWidth = mainRef.current.clientWidth;
    setWidth(contentWidth - 140 - 40);
  };

  delay(onChange, 50);

  useEffect(() => {
    // 延迟设置宽度，保障 dom 加载完成
    return window.addEventListener("resize", () => delay(onChange, 50));
  }, []);

  return (
    <div className={styles["card-list-body"]}>
      {data.map((item: Article) => (
        <div ref={mainRef} key={item.id} className={styles["card-item"]}>
          <div ref={textRef} className={styles["card-text"]}>
            <div className={styles["card-title"]}>{item.title}</div>
            <div
              style={{ width: `${width}px` }}
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
