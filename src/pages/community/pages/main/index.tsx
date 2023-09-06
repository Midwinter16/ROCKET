import { Outlet } from "@umijs/max";
import { Col, Row } from "antd";

import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./index.less";
import Rank from "./Rank";

const Main = () => {
  return (
    <div className={styles["body-container"]}>
      <Header></Header>
      <div className={styles["body-main"]}>
        <Row gutter={30}>
          <Col span={5}>
            <SideBar />
          </Col>
          <Col span={14} className="main">
            <Outlet></Outlet>
          </Col>
          <Col span={5}>
            <Rank></Rank>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Main;
