// 查询头

import { Button, Form, Input } from "antd";

import styles from "./index.less";

interface FilterProps {}

const Filter: React.FC<FilterProps> = (props) => {
  const [form] = Form.useForm();

  return (
    <div className={styles["filter"]}>
      <Form className={styles["form"]} form={form} layout="inline">
        <Form.Item name={"name"} label={"名称"}>
          <Input />
        </Form.Item>
      </Form>
      <div className={styles["operator"]}>
        <Button>重置</Button>
        <Button type="primary">查询</Button>
      </div>
    </div>
  );
};

export default Filter;
