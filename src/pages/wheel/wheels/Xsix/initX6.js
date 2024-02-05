import { Graph, Shape } from "@antv/x6";
import { register } from "@antv/x6-react-shape";
import { message } from "antd";
import CustomNode from "./CustomNode";

// 计算泳道可移动边界
const getBoundary = (props, padding) => {
  const { x, y, width, height } = props;
  return {
    x: x + padding,
    y: y + padding,
    width: width - padding * 2,
    height: height - padding * 2,
  };
};

// 挂载节点
const loadNode = (graph, data) => {
  data.forEach((node) => {
    if (node.shape === "lane") graph.addNode(node);
    if (node.shape === "node") {
      const { data, x, y } = node;
      const parent = graph.addNode(node);
      // 添加指标节点
      const child = graph.addNode({
        shape: "data",
        x: x,
        y: y + 95,
        label: data.user,
      });
      // 将指标节点设置为事件节点的子节点
      parent.addChild(child);
    }
  });
};

// 矩形默认配置
// Shape.Rect.config({
//   width: 90,
//   height: 90,
//   markup: [
//     {
//       tagName: "rect",
//       selector: "body",
//     },
//     {
//       tagName: "text",
//       selector: "label",
//     },
//   ],
//   attrs: {
//     body: {
//       fill: "rgb(0,178,128)",
//       stroke: "rgb(0,178,128)",
//       // strokeWidth: 10,
//       rx: 7,
//       ry: 7,
//     },
//     label: {
//       fontSize: 14,
//       fill: "#fff",
//       fontFamily: "Arial, helvetica, sans-serif",
//       textAnchor: "middle",
//       textVerticalAnchor: "middle",
//       textWrap: {
//         width: -10, // 宽度减少 10px
//         height: "100%", // 高度为参照元素高度的一半
//         ellipsis: true, // 文本超出显示范围时，自动添加省略号
//         breakWord: true, // 是否截断单词
//       },
//     },
//   },
//   ports: {
//     groups: {
//       // 输入链接桩群组定义
//       in: {
//         position: "left",
//         attrs: {
//           circle: {
//             r: 5,
//             magnet: true,
//             stroke: "rgb(0,178,128)",
//             strokeWidth: 2,
//             fill: "#fff",
//           },
//         },
//       },
//       // 输出链接桩群组定义
//       out: {
//         position: "right",
//         attrs: {
//           circle: {
//             r: 5,
//             magnet: true, // 连接桩在连接时可以被连上
//             stroke: "rgb(0,178,128)",
//             strokeWidth: 2,
//             fill: "#fff",
//           },
//         },
//       },
//     },
//     items: [
//       {
//         id: "port1",
//         group: "in",
//       },
//       {
//         id: "port2",
//         group: "out",
//       },
//     ],
//   },
//   zIndex: 10,
// });

// 边默认配置
Shape.Edge.config({
  router: {
    name: "manhattan", // 生成垂直或水平连线
  },
  connector: {
    name: "rounded", // 转角处圆角处理
  },
  attrs: {
    label: {
      text: "hello",
    },
  },
});

// 泳道
Graph.registerNode(
  "lane",
  {
    inherit: "rect",
    width: 200,
    height: 200,
    attrs: {
      body: {
        fill: "#fff",
        stroke: "#000",
        strokeWidth: "2",
      },
    },
    data: {
      parent: true,
    },
    zIndex: 1,
  },
  false, // 重名时是否覆盖，默认为 false 不覆盖（重名时报错）
);

// 事件节点
Graph.registerNode(
  "node",
  {
    inherit: "rect",
    width: 90,
    height: 90,
    markup: [
      {
        tagName: "rect",
        selector: "body",
      },
      {
        tagName: "text",
        selector: "label",
      },
    ],
    attrs: {
      body: {
        fill: "rgb(0,178,128)",
        stroke: "rgb(0,178,128)",
        // strokeWidth: 10,
        rx: 7,
        ry: 7,
      },
      label: {
        fontSize: 14,
        fill: "#fff",
        fontFamily: "Arial, helvetica, sans-serif",
        textAnchor: "middle",
        textVerticalAnchor: "middle",
        textWrap: {
          width: -10, // 宽度减少 10px
          height: "100%", // 高度为参照元素高度的一半
          ellipsis: true, // 文本超出显示范围时，自动添加省略号
          breakWord: true, // 是否截断单词
        },
      },
    },
    ports: {
      groups: {
        // 输入链接桩群组定义
        in: {
          position: "left",
          attrs: {
            circle: {
              r: 5,
              magnet: true,
              stroke: "rgb(0,178,128)",
              strokeWidth: 2,
              fill: "#fff",
            },
          },
        },
        // 输出链接桩群组定义
        out: {
          position: "right",
          attrs: {
            circle: {
              r: 5,
              magnet: true, // 连接桩在连接时可以被连上
              stroke: "rgb(0,178,128)",
              strokeWidth: 2,
              fill: "#fff",
            },
          },
        },
      },
      items: [
        {
          id: "in",
          group: "in",
        },
        {
          id: "out",
          group: "out",
        },
      ],
    },
    zIndex: 10,
  },
  false, // 重名时是否覆盖，默认为 false 不覆盖（重名时报错）
);

// 指标节点
Graph.registerNode(
  "data",
  {
    inherit: "rect",
    width: 90,
    height: 16,
    markup: [
      {
        tagName: "rect",
        selector: "body",
      },
      {
        tagName: "text",
        selector: "label",
      },
    ],
    attrs: {
      body: {
        fill: "#fff",
        stroke: "#fff",
      },
      label: {
        fontSize: 16,
        fill: "#000",
        fontFamily: "Arial, helvetica, sans-serif",
        textAnchor: "middle",
        textVerticalAnchor: "middle",
      },
    },
    zIndex: 10,
  },
  false, // 重名时是否覆盖，默认为 false 不覆盖（重名时报错）
);

// 注册自定义节点
register({
  shape: "custom-node",
  width: 180,
  height: 36,
  component: CustomNode,
});

// 画布默认配置
const initGraph = (element, data) => {
  const graph = new Graph({
    grid: {
      size: 10,
      visible: false,
    },
    background: { color: "#fff" }, // 背景
    container: element,
    width: 800,
    height: 800,
    panning: {
      enabled: true,
      modifiers: "shift", // 修饰键，即按下 shift 才可以拖拽画布
      eventTypes: ["leftMouseDown", "rightMouseDown"], // 触发键，即触发对应的事件可以拖拽画布，默认值为鼠标左键
    },
    mousewheel: {
      // 滚轮缩放，一版配合修饰键来进行缩放，防止和上下移动画布冲突
      enabled: true,
      modifiers: ["ctrl", "meta"],
    },
    // 开启嵌套父节点方法
    embedding: {
      enabled: true,
      // 在节点被移动时通过 findParent 方法返回父节点。默认值为 bbox
      findParent({ node }) {
        const bbox = node.getBBox(); // 获取节点信息 getBBox 返回容器渲染到画布后的包围盒
        // getNodes 返回画布中所有节点。
        return this.getNodes().filter((node) => {
          // 只有 data.parent 为 true 的节点才是父节点
          const data = node.getData();
          if (data && data.parent) {
            const targetBBox = node.getBBox();
            return bbox.isIntersectWithRect(targetBBox); // 手册没有解释，这段的意思是将 bbox（拖拽节点）嵌入到 targetBBox（父结点） 中
          }
          return false;
        });
      },
    },
    // 节点移动时触发，限制子节点跳出父结点范围
    // translating 移动范围
    translating: {
      restrict(view) {
        // CellView
        if (view) {
          const cell = view.cell; // view.cell 指当前节点所在的图层
          if (cell.isNode()) {
            // 检测图层是否为节点
            const parent = cell.getParent(); // 检测图层是否为节点的父结点
            if (parent) {
              return getBoundary(parent.getBBox(), 10); // 返回带有 padding 的父节点的包围盒，并以该包围盒作为限制区域
            }
          }
          const prop = cell.prop();
          // 如果是父结点，禁止父结点移动
          if (prop.data && prop.data.parent) {
            return {
              ...prop.size,
              ...prop.position,
            };
          }
        }
        return null;
      },
    },
    connecting: {
      // 是否允许连接到画布空节点
      allowBlank() {
        // 根据条件返回 true or false
        return false;
      },
    },
  });
  // docs:https://x6.antv.vision/zh/docs/tutorial/intermediate/events#%E8%8A%82%E7%82%B9%E5%B5%8C%E5%85%A5
  // 当嵌入事件完成后，增加父节点的高度
  graph.on("node:embedded", (event) => {
    const { currentParent, previousParent } = event;
    console.log(currentParent);
    if (!previousParent || currentParent.id !== previousParent.id) {
      const originHeight = +currentParent.prop().size.height; // prop 获取 node 节点属性
      currentParent.prop({ size: { height: originHeight + 100 } });
    }
  });
  // docs:https://x6.antv.vision/zh/docs/tutorial/intermediate/events#%E8%BE%B9%E8%BF%9E%E6%8E%A5%E5%8F%96%E6%B6%88%E8%BF%9E%E6%8E%A5
  // 边连接事件
  graph.on("edge:connected", ({ edge, currentPort, currentCell }) => {
    if (!currentPort && currentCell) {
      message.warning("请连接到节点的连接桩上");
      graph.removeEdge(edge.id);
    }
    if (currentPort && currentPort !== "in") {
      message.error("连接边不合法，请重新连接");
      graph.removeEdge(edge.id);
    }
  });
  // node节点：鼠标进入事件
  graph.on("node:mouseenter", ({ node }) => {
    const { shape } = node.prop();
    if (shape === "node") {
      node.addTools({
        name: "button-remove",
        args: {
          x: 0,
          y: 0,
          offset: { x: 90, y: 0 },
        },
      });
    }
  });
  // node节点：鼠标退出事件
  graph.on("node:mouseleave", ({ node }) => {
    const { shape } = node.prop();
    if (shape === "node") {
      node.removeTools();
    }
  });
  // 挂载 scroll 插件
  // graph.use(
  //   new Scroller({
  //     enabled: true,
  //     className: "scroller",
  //     padding: 0,
  //   }),
  // );
  // 挂载节点
  loadNode(graph, data);
  // test
  graph.addNode(
    graph.createNode({
      id: "1",
      shape: "custom-node",
      x: 300,
      y: 300,
    }),
  );
  // graph.centerContent(); // 画布内容置中
  return graph;
};

export default initGraph;
