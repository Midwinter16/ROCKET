import "swiper/less";
import "swiper/less/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "./index.less"; // 使用bulletActiveClass等需要直接引用类名情况时，要将 index.less 直接引进来

interface MainSwiperProps {
  data: string[];
}

const MainSwiper: React.FC<MainSwiperProps & SwiperProps> = (props) => {
  const { data } = props;

  return (
    <div className={"swiper-container"}>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay, Pagination]}
        pagination={{
          bulletActiveClass: "swiper-active-bullet", // 直接写类名即可
          clickable: true,
          type: "bullets",
        }}
        width={360}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={"swiper-slide-content"}>{item}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSwiper;
