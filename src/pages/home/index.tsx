import { Button } from "antd";

interface testProps {
  name?: string;
}

type testProps1 = {
  name?: string;
};

const testname: testProps1 = {
  name: "nihao",
};

const HomePage = () => {
  const list = new Array(30).fill(0).map((item, index) => index);

  return (
    <div className="homepage">
      {list.map((item, index) => (
        <Button
          className="item"
          style={{ width: "100px", height: "100px" }}
          key={index}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default HomePage;
