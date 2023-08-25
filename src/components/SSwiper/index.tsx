import { Card } from "antd";

import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import "swiper/less/scrollbar";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "./index.less";

import leftArrowIcon from "../../assets/leftArrow.svg";
import rightArrowIcon from "../../assets/rightArrow.svg";

interface SSwiperProps {
  pagenation?: boolean;
  navigation?: boolean;
  autoplay?: boolean;
  width?: number;
  arrowIcons?: string[];
  data: any[];
}

/**
 * data：数据
 * pagenation：分页
 * navigation：导航
 * autoplay：自动播放
 * width：宽度
 * arrowIcons：导航箭头
 * slidesPerView：同时显示多少个 slide -> 最好是 slide 页面的一半以下，不然会有 bug
 * loop：循环
 * effect：swiper 类型
 * @returns SSwiper
 */

const SSwiper: React.FC<SSwiperProps & SwiperProps> = (props) => {
  const {
    pagenation = true,
    navigation = true,
    autoplay = true,
    width = 500,
    arrowIcons = [leftArrowIcon, rightArrowIcon],
    data,
    ...others
  } = props;

  return (
    <>
      <Card style={{ width }}>
        <Swiper
          className="swiper-container"
          modules={[Pagination, Navigation, Scrollbar, Autoplay]}
          pagination={
            pagenation && {
              bulletActiveClass: "swiper-active-bullet", // 直接写类名即可
              clickable: true,
              // el: ".swiper-pagenation-el", // 包裹 pagenation 中的 bullet 的外层
              // renderBullet: (index, className) => // 自定义 bullet 渲染的结果
              //   `<div class="${className}">${index + 1}</div>`,
              type: "bullets",
            }
          }
          navigation={
            navigation && {
              prevEl: ".swiper-prev-btn", // 涉及到 EL 元素相关的要写以点（.）开头的类名
              nextEl: ".swiper-next-btn",
            }
          }
          autoplay={
            autoplay && {
              delay: 3000,
              disableOnInteraction: false,
            }
          }
          loop={true}
          coverflowEffect={{}}
          fadeEffect={{}}
          flipEffect={{}}
          cardsEffect={{}}
          creativeEffect={{}}
          centeredSlides={true}
          slidesPerView={2}
          {...others}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  padding: "50px",
                  textAlign: "center",
                  lineHeight: "100%",
                }}
              >
                {item}
              </div>
            </SwiperSlide>
          ))}
          <img src={arrowIcons[0]} className={"swiper-prev-btn"}></img>
          <img src={arrowIcons[1]} className={"swiper-next-btn"}></img>
        </Swiper>
      </Card>
    </>
  );
};

export default SSwiper;
