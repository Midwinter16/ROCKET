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
  title?: string | number;
  fontsize?: number;
  direction?: "vertical" | "horizontal";
  onClick?: () => void;
}

const SIcon: React.FC<SIconProps> = (props) => {
  const {
    size,
    icon,
    count,
    title,
    fontsize = 14,
    direction = "horizontal",
    onClick,
    ...other
  } = props;

  return (
    <div
      onClick={onClick}
      className="flex justify-center align-center"
      {...other}
    >
      <Badge size="small" count={count !== 0 && count} dot={count === 0}>
        <img className={styles[size]} src={icon}></img>
      </Badge>
      {title && (
        <span
          className={styles[`span-${size}`]}
          style={{ fontSize: `${fontsize}px`, marginLeft: "7px" }}
        >
          {title}
        </span>
      )}
    </div>
  );
};
export default SIcon;
