import { useEffect, useState } from "react";
import styles from "./index.less";

interface IProps {
  time: number;
  onClose: () => void;
  autoClose?: boolean;
}

const AD: React.FC<IProps> = ({ time, onClose, autoClose }) => {
  const [count, setCount] = useState(time);
  const closeAD = () => {
    if (count) return;
    onClose();
  };

  // 倒计时
  useEffect(() => {
    // 自动关闭
    if (autoClose) closeAD();
    if (!count) return;
    const interval = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [count]);

  return (
    <div className={styles["ad-body"]}>
      <div className={styles["count-down"]}>
        <div className={styles["count-down-text"]}>倒计时</div>
        <div
          onClick={closeAD}
          className="flex-3 cursor-pointer w-9 text-center"
        >
          {count ? count : "关闭"}
        </div>
      </div>
      <div className="w-full h-full bg-red-400 text-center pt-100">广告位</div>
    </div>
  );
};

export default AD;
