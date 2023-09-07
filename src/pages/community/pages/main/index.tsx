import { Outlet } from "@umijs/max";
import { Col, Row } from "antd";

import Header from "./Header";
import Rank from "./Info";
import SideBar from "./SideBar";
import styles from "./index.less";

const Main = () => {
  return (
    <div className={styles["body-container"]}>
      <Header></Header>
      <div className={styles["body-main"]}>
        <Row gutter={20}>
          <Col flex="300px">
            <SideBar />
          </Col>
          <Col flex="auto" className="main">
            <Outlet></Outlet>
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
