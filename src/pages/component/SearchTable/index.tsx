// 查询式表格

import { Table } from "antd";

import Filter from "./Filter";
import styles from "./index.less";

interface TableColumnProps {
  title: string;
  dataIndex: string;
  key: string;
}

interface DataSourceProps {
  key: string;
  [key: string]: any;
}

interface SearchTableProps {
  columns?: Array<TableColumnProps>;
  dataSource?: Array<DataSourceProps>;
}

const SearchTable: React.FC<SearchTableProps> = (props) => {
  const { columns, dataSource } = props;

  return (
    <div className={styles["search-table"]}>
      <Filter />
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

const Home = () => {
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
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];
  return <SearchTable columns={columns} dataSource={dataSource} />;
};

export default Home;
