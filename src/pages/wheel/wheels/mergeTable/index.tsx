import { Button, Input, Table, message } from "antd";
import { useEffect, useState } from "react";

const Test = () => {
  type DataProps = {
    name: string;
    age: number;
    career: string;
    span?: number;
  };
  const columns = [
    {
      title: "职业",
      dataIndex: "career",
      key: "career",
      onCell: (value: DataProps) => ({
        rowSpan: value.span,
      }),
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
  ];
  const [data, setData] = useState<DataProps[]>([
    {
      name: "overflow",
      age: 39,
      career: "术士",
    },
    {
      name: "overflow",
      age: 39,
      career: "术士",
    },
    {
      name: "hellow",
      age: 19,
      career: "法师",
    },
    {
      name: "hii",
      age: 29,
      career: "战士",
    },
    {
      name: "hii",
      age: 29,
      career: "法师",
    },
    {
      name: "heil",
      age: 39,
      career: "术士",
    },
    {
      name: "haha",
      age: 39,
      career: "猎人",
    },
  ]);
  const [careersList, setCareersList] = useState([
    "猎人",
    "术士",
    "法师",
    "战士",
  ]);
  const [career, setCareer] = useState("");

  const processData = (data: DataProps[], typeList: string[]) => {
    const careerMap = new Map();
    // 以职业对列表进行重排序
    const sortData = typeList.reduce((acc: DataProps[], item) => {
      return [...acc, ...data.filter((ele) => ele.career === item)];
    }, []);
    // 计数
    sortData.forEach((item) => {
      const key = item.career;
      if (!careerMap.has(key)) {
        careerMap.set(key, {
          count: 1,
          trigger: 0,
        });
      } else {
        careerMap.get(key).count += 1;
      }
    });
    // 添加 span 值
    return sortData.map((item) => {
      const key = item.career;
      if (careerMap.get(key).trigger === 0) {
        careerMap.get(key).trigger = 1;
        return {
          ...item,
          span: careerMap.get(key).count,
        };
      } else {
        return {
          ...item,
          span: 0,
        };
      }
    });
  };

  const randomAdd = () => {
    setData((prev) => [
      ...prev,
      {
        name: "random",
        age: 18,
        career: careersList[Math.floor(Math.random() * careersList.length)],
      },
    ]);
  };

  useEffect(() => {}, [data]);

  return (
    <div className="table-container">
      <Button onClick={randomAdd}>随机添加数据</Button>
      <Input
        value={career}
        onChange={(e) => setCareer(e.target.value)}
        placeholder="输入职业名称"
      ></Input>
      <Button
        onClick={() => {
          if (career === "") {
            message.info("请输入职业");
            return;
          }
          message.info(`${career}添加成功`);
          setCareer("");
          setCareersList((prev) => [...prev, career]);
        }}
      >
        添加职业
      </Button>
      <Table
        bordered
        columns={columns}
        dataSource={processData(data, careersList)}
        pagination={false}
      ></Table>
    </div>
  );
};

export default Test;
