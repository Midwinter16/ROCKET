import testIcon from "@imgs/test.jpg";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import styles from "./index.less";

const DemoModal = () => {
  const [modal, setModal] = useState(false);

  const list = [
    {
      title: "商品经营分析",
      subTitle: "了解您的热门表现，挖掘热门商品，潜力商品",
    },
    {
      title: "渠道获客质量评估",
      subTitle: "科学评估渠道流量质量，助力投放策略优化",
    },
    {
      title: "促进用户转化",
      subTitle: "基于用户分层x的精细化运营，提升转化率",
    },
  ];

  return (
    <>
      <Button onClick={() => setModal(true)}>OpenModal</Button>
      <Modal
        centered
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
        footer={null}
        maskClosable={false}
        closeIcon={!false}
        width={1100}
      >
        <div className={styles["modal-content"]}>
          <Image className={styles["img"]} src={testIcon} alt="" />
          <div className={styles["text-card"]}>
            {list.map((item) => {
              return (
                <div key={item.title} className={styles["text-content"]}>
                  <div className={styles["title"]}>{item.title}</div>
                  <div>{item.subTitle}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DemoModal;
