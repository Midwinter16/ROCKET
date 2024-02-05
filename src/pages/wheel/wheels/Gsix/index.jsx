import G6 from "@antv/g6";
import { useEffect } from "react";
import "./customNode";

const Gsix = () => {
  const data = {
    id: "1", // String，该节点存在则必须，节点的唯一标识
    label: "1",
    children: [
      {
        id: "2",
        label: "2",
        children: [
          { id: "4", label: "4" },
          { id: "5", label: "5" },
        ],
      },
      { id: "3", label: "3" },
    ],
  };

  useEffect(() => {
    const graph = new G6.TreeGraph({
      container: "mountNode",
      width: 1200,
      height: 1200,
      fitView: true,
      modes: {
        default: ["drag-canvas", "zoom-canvas", "drag-node"],
      },
      defaultNode: {
        size: 26,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
      },
      defaultEdge: {
        type: "polyline",
      },
      // 定义布局
      layout: {
        type: "dendrogram",
        direction: "LR", // H / V / LR / RL / TB / BT
        nodeSep: 30,
        rankSep: 100,
      },
    });
    graph.data(data); // 读取 Step 2 中的数据源到图上
    graph.render(); // 渲染图
  });

  return <div id="mountNode"></div>;
};

export default Gsix;
