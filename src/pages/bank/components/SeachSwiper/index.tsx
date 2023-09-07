import sousuoIcon from "@icons/sousuo.svg";
import SIcon from "@/components/SIcon";
import { Col, Row } from "antd";
import "swiper/less";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { history } from "umi";
import styles from "./index.less";

interface SearchSwiperProps {
  data: string[];
}

const SearchSwiper: React.FC<SearchSwiperProps & SwiperProps> = (props) => {
  const { data } = props;

  return (
    <div
      onClick={() => {
        history.push("/bank/search");
      }}
      className={styles["swiper-container"]}
    >
      <Row>
        <Col span={21}>
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            direction="vertical"
            modules={[Autoplay]}
            height={30}
            allowTouchMove={false}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <span className={styles["swiper-slide-content"]}>{item}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col span={3}>
          <SIcon size="tiny" icon={sousuoIcon}></SIcon>
        </Col>
      </Row>
    </div>
  );
};

export default SearchSwiper;
