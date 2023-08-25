import { Button } from "antd";

const HomePage = () => {
  const list = new Array(30).fill(0).map((item, index) => index);

  

  return (
    <div className="homepage">
      {list.map((item, index) => (
        <Button style={{ width: "100px", height: "100px" }} key={index}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default HomePage;
