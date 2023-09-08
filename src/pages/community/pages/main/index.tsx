import { Outlet } from "@umijs/max";
import { Col, Row } from "antd";

import { useModel } from "@umijs/max";
import { Space } from "antd";
import { useEffect, useState } from "react";
import Header from "./Header";
import Rank from "./Info";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import styles from "./index.less";

const Main = () => {
  const [type, setType] = useState("vertical");
  const { labels, active, setActive } = useModel("community.catelogs");

  const initType = () => {
    const clientWidth = window.innerWidth;
    if (clientWidth <= 1400) {
      setType("horizontal");
    } else {
      setType("vertical");
    }
  };

  useEffect(() => {
    initType();
    return window.addEventListener("resize", initType);
  });

  return (
    <div className={styles["body-container"]}>
      <Header></Header>
      {type === "horizontal" && <TopBar></TopBar>}
      <div className={styles["body-main"]}>
        {type === "horizontal" && (
          <div className={styles["label-select"]}>
            <Space>
              {labels?.map((item) => (
                <div
                  onClick={() => setActive(item.value)}
                  className={`${styles["label-select-item"]} ${
                    active === item.value && styles["active"]
                  }`}
                  key={item.value}
                >
                  {item.label}
                </div>
              ))}
            </Space>
          </div>
        )}

        <Row wrap={false} gutter={20}>
          {type === "vertical" && (
            <Col flex="200px">
              <SideBar />
            </Col>
          )}
          <Col flex="auto" className="main">
            <Outlet
              context={{ labels, active, onChange: setActive, type }}
            ></Outlet>
          </Col>
          <Col flex="300px">
            <Rank></Rank>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Main;
