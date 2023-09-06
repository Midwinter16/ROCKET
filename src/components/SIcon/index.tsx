import { IconSize } from "@/constants";
import { Badge, Space } from "antd";
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
  direction?: "vertical" | "horizontal";
}

const SIcon: React.FC<SIconProps> = (props) => {
  const {
    size,
    icon,
    count,
    title,
    fontsize = 14,
    direction = "horizontal",
  } = props;

  return (
    <div className={styles.sicon}>
      <Space direction={direction}>
        <Badge size="small" count={count !== 0 && count} dot={count === 0}>
          <img className={styles[size]} src={icon}></img>
        </Badge>
        {title && (
          <span
            className={styles[`span-${size}`]}
            style={{ fontSize: `${fontsize}px` }}
          >
            {title}
          </span>
        )}
      </Space>
    </div>
  );
};
export default SIcon;
