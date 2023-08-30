import kefuIcon from "@/assets/kefu.svg";
import saoyisaoIcon from "@/assets/saoyisao.svg";
import shoujianIcon from "@/assets/shoujian.svg";
import SIcon from "@/components/SIcon";
import { Col, Row, Space } from "antd";
import {
  BottomSubBusiness,
  MainBusiness,
  TopSubBusiness,
} from "../assets/constants";
import MainSwiper from "../components/MainSwiper";
import SearchSwiper from "../components/SeachSwiper";

const HomePage = () => {
  const loopText = ["全家守护日", "年轻人保障计划", "家校有招"];
  return (
    <div>
      <Row style={{ margin: "10px" }} justify="space-between">
        <Col span={2}>
          <SIcon size="small" icon={saoyisaoIcon}></SIcon>
        </Col>
        <Col span={14}>
          <SearchSwiper data={loopText}></SearchSwiper>
        </Col>
        <Col span={5}>
          <Space>
            <SIcon size="small" icon={kefuIcon}></SIcon>
            <SIcon size="small" icon={shoujianIcon} count={16}></SIcon>
          </Space>
        </Col>
      </Row>
      {/* 主要业务部分 */}
      <Row style={{ margin: "25px 0" }} justify="space-around">
        {MainBusiness.map((business, index) => (
          <Col key={index}>
            <SIcon {...business}></SIcon>
          </Col>
        ))}
      </Row>
      {/* 次要业务部分 */}
      <Row style={{ margin: "25px 0" }} justify="space-around">
        {TopSubBusiness.map((business, index) => (
          <Col span={4} key={index}>
            <SIcon fontsize={10} {...business}></SIcon>
          </Col>
        ))}
      </Row>
      <Row style={{ margin: "25px 0" }} justify="space-around">
        {BottomSubBusiness.map((business, index) => (
          <Col span={4} key={index}>
            <SIcon fontsize={10} {...business}></SIcon>
          </Col>
        ))}
      </Row>
      {/* 主体轮播图 */}
      <MainSwiper data={loopText}></MainSwiper>
    </div>
  );
};

export default HomePage;
