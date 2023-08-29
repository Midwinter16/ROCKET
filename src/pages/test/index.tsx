import STable from "@/components/STable";
import { ColumnsType } from "antd/es/table";
import { useRef } from "react";

const columns: ColumnsType<Record<string, any>> = [
  {
    title: "name",
    dataIndex: "name",
    width: 200,
    render: (name) => <div>{name}</div>,
  },
  {
    title: "age",
    dataIndex: "age",
    render: (name) => <div>{name}</div>,
  },
  {
    title: "address",
    dataIndex: "address",
    render: (name) => <div>{name}</div>,
  },
];

const dataSource = new Array(2)
  .fill(0)
  .map((_, index) => index)
  .map((item) => ({
    key: item,
    name: "123",
    age: 0 + item,
    address: "西湖区湖底公园1号",
  }));

const Test = () => {
  // const [open, setOpen] = useState(false);
  const tableRef = useRef<any>();
  // delay是为了在触发 handleResize 后，Dom 渲染完成后进行操作
  // const handleResize = useMemoizedFn(() => delay(tableRef.current.resize, 0));

  return (
    <>
      <STable
        ref={tableRef}
        title={() => {
          return "hellow";
        }}
        wrapperHeightOffset={-24}
        columns={columns}
        dataSource={dataSource}
      ></STable>
    </>
  );
};

export default Test;
