import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "./index.less";

interface SSwiperProps {
  data: any[];
  type: "IMG" | "STR";
  width?: number;
  height?: number;
}

/**
 * data：数据
 * type：类型 字符 or 图片
 * width：宽，默认 800
 * height：高，默认 200
 * @returns SSwiper
 */

const SSwiper: React.FC<SSwiperProps & SwiperProps> = (props) => {
  const { data, type, width = 800, height = 200, ...others } = props;

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px`, overflow: "hidden" }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        width={width}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        {...others}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {type === "STR" ? (
              <div
                style={{
                  padding: `${height / 2 - 10}px`,
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                {item}
              </div>
            ) : (
              <img
                src={item}
                style={{ width: `${width}px`, height: `${height}px` }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SSwiper;
