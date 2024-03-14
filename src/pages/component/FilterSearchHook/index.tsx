// 自定义表单筛选查询钩子
import { Button, Form, Input, Table } from "antd";

import { dataSource } from "./constant";
import styles from "./index.less";
import { useFilterSearch } from "./useFilterSearch";

const mockApi = (data) => {
  const { page, pageSize } = data;
  return new Promise((res) => {
    setTimeout(() => {
      res({
        total: dataSource.length,
        dataSource: dataSource.slice((page - 1) * pageSize, page * pageSize),
      });
    }, 1000);
  });
};

const AutoHeight = () => {
  const [form] = Form.useForm();

  const { data, loading, onChange } = useFilterSearch(mockApi, form);

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <div className={styles.form}>
        <Form form={form} layout="inline">
          <Form.Item name="name" label="姓名">
            <Input />
          </Form.Item>
          <Form.Item name="age" label="年龄">
            <Input />
          </Form.Item>
        </Form>
        <div className={styles.operator}>
          <Button type="primary" onClick={() => onChange()}>
            查询
          </Button>
          <Button type="primary">重置</Button>
        </div>
      </div>

      <Table
        loading={loading}
        columns={columns}
        dataSource={data?.dataSource}
        pagination={{
          total: data?.total,
          position: ["bottomRight"],
          pageSizeOptions: [5, 10, 20],
          showTotal: (total) => `共 ${total} 条数据`,
          showSizeChanger: true,
          showQuickJumper: true,
          onChange,
        }}
      />
    </>
  );
};

export default AutoHeight;
