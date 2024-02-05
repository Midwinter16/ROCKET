// 编辑式标题

import { EditOutlined, LoadingOutlined } from "@ant-design/icons";
import { Input, InputRef, message } from "antd";
import { delay } from "lodash";
import { useRef, useState } from "react";

import styles from "./index.less";

interface EditTitleProps {
  onOk?: (val: string) => void;
}

const EditTitle: React.FC<EditTitleProps> = (props) => {
  const { onOk } = props;

  const [value, setValue] = useState<string>("标题");
  const [status, setStatus] = useState<boolean>(false);

  const inputRef = useRef<InputRef>(null);

  const handleEdit = () => {
    setStatus(true);
    delay(
      () =>
        inputRef.current!.focus({
          cursor: "all",
        }),
      0,
    );
  };

  const handleOk = () => {
    setStatus(false);
    onOk?.(value);
    message.info("修改成功");
  };

  return (
    <div className={styles["edit-title"]}>
      {status ? (
        <div className={styles["edit"]}>
          <LoadingOutlined />
          <Input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            bordered={false}
            onPressEnter={handleOk}
            onBlur={handleOk}
          />
        </div>
      ) : (
        <div className={styles["view"]}>
          <EditOutlined onClick={handleEdit} style={{ cursor: "pointer" }} />
          <div className={styles["text-body"]} onClick={handleEdit}>
            <span className={styles["text"]}>{value}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <div
      style={{
        width: "200px",
      }}
    >
      <EditTitle />
    </div>
  );
};

export default Home;
