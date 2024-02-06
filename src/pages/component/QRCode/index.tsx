// 二维码生成器

import { ExclamationCircleFilled, LoadingOutlined } from "@ant-design/icons";
import qr from "qrcode";
import { useEffect, useState } from "react";

import { Button } from "antd";
import styles from "./index.less";

interface QRCodeProps {}

const QRCode: React.FC<QRCodeProps> = () => {
  const [status, setStatus] = useState<"NORMAL" | "EXPIRE" | "LOADING">(
    "EXPIRE",
  );

  useEffect(() => {
    qr.toCanvas(
      document.getElementById("canvas"),
      "123",
      {
        width: 200,
        margin: 1,
      },
      (err) => {
        console.log(err);
      },
    );
  }, []);

  return (
    <div className={styles["qrcode"]}>
      <div className={styles["canvas"]}>
        <canvas id="canvas"></canvas>
        {status === "EXPIRE" && (
          <div className={styles["expire"]}>
            <ExclamationCircleFilled
              style={{ fontSize: "40px", color: "rgb(178,128,0)" }}
            />
            <span style={{ fontWeight: 500 }}>当前二维码已过期</span>
            <Button
              size="small"
              onClick={() => {
                setStatus("LOADING");
                setTimeout(() => {
                  setStatus("NORMAL");
                }, 2000);
              }}
            >
              刷新
            </Button>
          </div>
        )}
        {status === "LOADING" && (
          <div className={styles["loading"]}>
            <LoadingOutlined style={{ fontSize: "40px" }} />
            <span>加载中</span>
          </div>
        )}
      </div>
      <div>请使用企业微信扫描二维码登录</div>
      <div>注：该方式仅限神策员工</div>
    </div>
  );
};

export default QRCode;
