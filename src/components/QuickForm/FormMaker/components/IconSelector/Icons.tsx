import { Space } from "antd";
import { IconFont, iconName } from "./constants";
import styles from "./index.less";

interface IconsProps {
  onChange: (type: string) => void;
}

const Icons: React.FC<IconsProps> = ({ onChange }) => {
  return (
    <div>
      <Space style={{ width: "192px" }} wrap align="baseline">
        {iconName.map((item) => (
          <IconFont
            className={styles.iconFont}
            key={item}
            type={`icon-${item}`}
            onClick={() => {
              onChange(item);
            }}
          ></IconFont>
        ))}
      </Space>
    </div>
  );
};
export default Icons;
