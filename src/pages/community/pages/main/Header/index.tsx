import SIcon from "@/components/SIcon";
import { HeaderBannerList } from "@/pages/community/constants";
import rocketIcon from "@icons/rocket.svg";
import vipIcon from "@icons/vip.svg";
import { Button, Col, Input, Row, Space } from "antd";
import { useState } from "react";
import { history } from "umi";
import styles from "./index.less";

const Header = () => {
  const [activeBanner, setActiveBanner] = useState<string>("main");
  return (
    <div className={styles["header-container"]}>
      <Row gutter={20}>
        <Col flex={"140px"}>
          <SIcon size="middle" icon={rocketIcon} title="火箭社区"></SIcon>
        </Col>
        <Col flex={1} className="header-banner">
          <Space size={"large"}>
            {HeaderBannerList.map((item) => {
              return (
                <div
                  className={`${styles["header-banner-item"]} ${
                    activeBanner === item.value &&
                    styles["header-banner-item-active"]
                  }`}
                  key={item.value}
                  onClick={() => {
                    setActiveBanner(item.value);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </Space>
        </Col>
        <Col span={8} className={styles["header-search"]}>
          <Input.Search
            style={{ padding: "5px" }}
            placeholder="探索..."
          ></Input.Search>
        </Col>
        <Col span={6}>
          <div className={styles["header-user"]}>
            <Space size={"large"}>
              <SIcon icon={vipIcon} size="small" title="会员"></SIcon>
              <Button
                onClick={() => {
                  history.push("/community/login");
                }}
              >
                注册 ｜ 登录
              </Button>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
