import { IconSize } from "@/constants";
import { Badge } from "antd";
import styles from "./index.less";

/**
 * size 图片大小
 * icon 图片地址
 * count 徽章，数量表示，值为 0 时为点表示
 */
export interface SIconProps {
  size: IconSize;
  icon: string;
  count?: number;
  title?: string;
  fontsize?: number;
}

const SIcon: React.FC<SIconProps> = (props) => {
  const { size, icon, count, title, fontsize = 14 } = props;

  return (
    <div className={styles.sicon}>
      <Badge size="small" count={count !== 0 && count} dot={count === 0}>
        <img className={styles[size]} src={icon}></img>
      </Badge>
      <span style={{ marginTop: "10px", fontSize: `${fontsize}px` }}>
        {title}
      </span>
    </div>
  );
};
export default SIcon;
