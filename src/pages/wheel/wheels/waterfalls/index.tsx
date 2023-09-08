import { useRef } from "react";
import "./index.less";

/**
 * 瀑布流实现感觉上最佳方式是使用 js+absolute 的方式实现动态加载，即在图片加载完成之后，通过 onload 属性来放置在最短列下方
 * 缺点：性能问题，图片填充考虑图片加载状态
 * 优点：灵活，无限加载，可添加动画
 */

/**
 * col：列数
 * gap：间距
 */
interface WaterfallsProps {
  col: number;
  gap: number;
}

const Waterfalls: React.FC<WaterfallsProps> = ({ col, gap }) => {
  const data = new Array(30).fill(0).map((_, index) => index);
  const imgs = new Array(10).fill(0).map((_, index) => `item${index}`);
  const el = useRef(null);

  const reader = new FileReader();

  // useEffect(() => {
  //   const list = [...el?.current?.children];

  //   list.forEach((item) => {
  //     console.log(item.querySelector(".item"));
  //   });
  // }, []);

  return (
    <div className="body-container" ref={el}>
      {data.map((_, index) => {
        return <div key={index}>123</div>;
      })}
    </div>
  );
};

export default Waterfalls;
