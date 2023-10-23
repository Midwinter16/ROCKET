import { Popover } from "antd";
import { useEffect, useState } from "react";
import Icons from "./Icons";
import { IconFont } from "./constants";
import styles from "./index.less";

interface IconSelectorProps {
  value?: string;
  onChange?: (str: string) => void;
}

const IconSelector: React.FC<IconSelectorProps> = ({
  value = "tuanduizhanghao",
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  // prefixContent = icon 时初始化为第一个图标
  useEffect(() => {
    onChange("tuanduizhanghao");
  }, []);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <div>
      <Popover
        placement="rightTop"
        content={<Icons onChange={onChange as (type: string) => void} />}
        title="Title"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <div className={styles.outline}>
          <IconFont className={styles.iconFont} type={`icon-${value}`} />
        </div>
      </Popover>
    </div>
  );
};

export default IconSelector;
