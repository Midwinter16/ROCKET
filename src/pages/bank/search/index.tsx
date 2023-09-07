import jiantouxiaIcon from "@icons/jiantouxia.svg";
import { spaceFont } from "@/utils/utils";
import { Col, Input, Row, Space } from "antd";
import { useState } from "react";
import styles from "./index.less";
import { history } from "@umijs/max";

const SearchPage = () => {
  const [city, setCity] = useState("深圳");
  return (
    <div className={styles["search-page"]}>
      <Row justify="space-between">
        <Col span={4}>
          <Space style={{ cursor: "pointer" }}>
            <span className={styles["cancel"]}>{spaceFont(city)}</span>
            <img
              src={jiantouxiaIcon}
              style={{ width: "10px", height: "10px" }}
            />
          </Space>
        </Col>
        <Col span={17}>
          <Input.Search></Input.Search>
        </Col>
        <Col span={2}>
          <span onClick={()=>history.push('/bank/home')} className={styles["cancel"]}>{spaceFont("取消")}</span>
        </Col>
      </Row>
    </div>
  );
};

export default SearchPage;
