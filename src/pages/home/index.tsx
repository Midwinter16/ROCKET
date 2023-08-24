import { Card } from "antd";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomePage: React.FC = () => {
  return (
    <>
      <Card style={{ width: "300px" }}>
        <Swiper
          modules={[
            Pagination,
            Navigation,
            Scrollbar,
            Autoplay,
            EffectCoverflow,
          ]}
          pagination={true}
          navigation={true}
          scrollbar={true}
          autoplay={true}
          width={300}
          loop={true}
          coverflowEffect={{ depth: 200 }}
          effect={"coverflow"}
        >
          <SwiperSlide
            style={{
              backgroundColor: "yellow",
              height: "200px",
              width: "200px",
            }}
          >
            Slide 1
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "green",
              height: "200px",
              width: "200px",
            }}
          >
            Slide 2
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "red",
              height: "200px",
              width: "200px",
            }}
          >
            Slide 3
          </SwiperSlide>
        </Swiper>
      </Card>
    </>
  );
};

export default HomePage;
