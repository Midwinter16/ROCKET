// import { useState } from "react";
import styles from "./index.less";
import { Avatar, Button } from "antd";
import alpha from "@/assets/imgs/alpha.jpg"
import { history } from "umi";


const User = () => {
  return (
    <>
      <div className={styles["user-container"]}>
        <div className={styles["major-area"]}>
          <div className={styles["user-info-block"]}>
            <Avatar className={styles["avatar"]} src={alpha} />
            <div className={styles["info-box"]}>
              <div className={styles["top"]}>
                <div className={styles["username"]}>
                  <span>捞佬</span>
                </div>
              </div>
              <div className={styles["introduction"]}>
                <div className={styles["left"]}>
                  <div className={styles["position"]}>
                    <span className={styles["content"]}>前端开发</span>
                  </div>
                  <div className={styles["intro"]}>
                    <span className={styles["content"]}>一个普通的前端开发者</span>
                  </div>
                </div>
                <div className={styles["right"]}>
                  <Button className={styles["setting-btn"]} onClick={() => { history.push("/community/settings"); }}>
                    设置
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["minor-area"]}>
          <div className={styles["sticky"]}>
            <div className={styles["achivement-card"]}>
              <div className={styles["title"]}>个人成就</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User;
