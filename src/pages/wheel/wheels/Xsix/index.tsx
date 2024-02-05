// import "@antv/x6-react-shape";
import { List } from "antd";
import * as echarts from "echarts";
import { useEffect, useState } from "react";
import "./index.css";
import initGraph from "./initX6";

// 使用 CDN 引入时暴露了 X6 全局变量
// const { Graph } = X6

const Xsix = () => {
  const initData = [
    {
      shape: "node",
      id: "node1", // String，可选，节点的唯一标识
      x: 390, // Number，必选，节点位置的 x 值
      y: 300, // Number，必选，节点位置的 y 值
      label: "首页浏览", // String，节点标签
      data: {
        user: 2000,
      },
    },
    {
      shape: "node",
      id: "node2", // String，节点的唯一标识
      x: 300, // Number，必选，节点位置的 x 值
      y: 300, // Number，必选，节点位置的 y 值
      label: "权益测试", // String，节点标签
      data: {
        user: 3000,
      },
    },
    {
      shape: "lane", // 使用已注册的父节点
      id: "parent1", // String，节点的唯一标识
      x: 5, // Number，必选，节点位置的 x 值
      y: 5, // Number，必选，节点位置的 y 值
    },
    {
      shape: "lane", // 使用已注册的父节点
      id: "parent2", // String，节点的唯一标识
      x: 5 + 205, // Number，必选，节点位置的 x 值
      y: 5, // Number，必选，节点位置的 y 值
    },
    {
      shape: "custom-node",
      id: "node123", // String，节点的唯一标识
      x: 300, // Number，必选，节点位置的 x 值
      y: 300, // Number，必选，节点位置的 y 值
      label: "123123", // String，节点标签
      data: {
        user: 3000,
      },
    },
  ];
  const [data, setData] = useState(initData);

  const success = [
    "已完成初始化画布配置",
    "已完成节点嵌入泳道",
    "已完成嵌入节点移动限制",
    "已完成节点连接桩",
    "已完成泳道自动拓展",
    "已完成边连接检测，out 必须要到 in",
    "已完成限制泳道移动",
    "已完成禁止边连接到节点上",
    "已完成添加节点",
    "已完成添加泳道（和节点类似）",
    "已完成节点限制在有 padding 的泳道内移动",
    "添加节点删除交互",
    "已完成添加节点指标",
    "添加边交互",
  ];

  useEffect(() => {
    const graph = initGraph(document.getElementById("container"), data);
    return () => graph.dispose();
  }, [data]);

  useEffect(() => {
    let chartDom = document.getElementById("testhome");
    let myChart = echarts.init(chartDom);
    let option;

    option = {
      series: {
        type: "sankey",
        layout: "none",
        emphasis: {
          focus: "adjacency",
        },
        data: [
          {
            name: "a",
          },
          {
            name: "b",
          },
          {
            name: "a1",
          },
          {
            name: "a2",
          },
          {
            name: "b1",
          },
          {
            name: "c",
          },
        ],
        links: [
          {
            source: "a",
            target: "a1",
            value: 5,
          },
          {
            source: "a",
            target: "a2",
            value: 3,
          },
          {
            source: "b",
            target: "b1",
            value: 8,
          },
          {
            source: "a",
            target: "b1",
            value: 3,
          },
          {
            source: "b1",
            target: "a1",
            value: 1,
          },
          {
            source: "b1",
            target: "c",
            value: 2,
          },
        ],
      },
    };

    myChart.setOption(option);
  }, []);

  return (
    <div>
      <div id="container"></div>
      {/* <div className="btn-group">
        <Button
          onClick={() => {
            setData((prev) => [
              ...prev,
              {
                shape: "node",
                id: new Date().toString(), // String，可选，节点的唯一标识
                x: 0, // Number，必选，节点位置的 x 值
                y: 300, // Number，必选，节点位置的 y 值
                label: "new data", // String，节点标签
                data: {
                  user: 2300,
                },
              },
            ]);
          }}
        >
          添加节点
        </Button>
      </div> */}
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div
          data-type="rect"
          style={{ width: "60px", height: "60px", border: "1px solid #000" }}
        >
          Rect
        </div>
        <div
          data-type="circle"
          style={{ width: "60px", height: "60px", border: "1px solid #000" }}
        >
          Circle
        </div>
      </div>
      <List
        bordered
        dataSource={success}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <div
        style={{
          wordWrap: "break-word",
          width: "60px",
          height: "60px",
          lineHeight: "30px",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        你好我好大家好
      </div>
      {/* <CustomNode /> */}
      <div id="testhome"></div>
    </div>
  );
};

export default Xsix;
