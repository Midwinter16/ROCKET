// 验证码模块

import { Button } from "antd";

import { Timeout } from "ahooks/lib/useRequest/src/types";
import { useRef, useState } from "react";
import styles from "./index.less";

interface VerificationProps {
  count: number;
  onClick: () => void;
}

const Verification: React.FC<VerificationProps> = (props) => {
  const { count: initCount = 60, onClick } = props;

  const [status, setStatus] = useState<boolean>(true);
  const [count, setCount] = useState<number>(initCount);

  const timer = useRef<Timeout>();

  const startCount = () => {
    setStatus(false);
    onClick?.();
    timer.current = setInterval(() => {
      setCount((prev) => {
        if (prev - 1 === 0) {
          setStatus(true);
          clearInterval(timer.current);
          return initCount;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className={styles["verificaiton"]}>
      {status ? (
        <Button style={{ width: "100px" }} type="primary" onClick={startCount}>
          发送验证码
        </Button>
      ) : (
        <Button disabled={true} style={{ width: "100px" }}>
          {count}s
        </Button>
      )}
    </div>
  );
};

export default Verification;
