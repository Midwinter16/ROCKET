import { DownOutlined, UpOutlined } from "@ant-design/icons";

const CustomNode = () => {
  return (
    <div>
      <div
        className="box"
        style={{ padding: "20px", border: "1px solid red", width: "100px" }}
      >
        测试盒子
        <UpOutlined />
        <DownOutlined />
      </div>
    </div>
  );
};

export default CustomNode;
