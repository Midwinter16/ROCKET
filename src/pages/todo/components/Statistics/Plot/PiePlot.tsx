import { G2, Pie } from "@antv/g2plot";
import { useEffect, useRef } from "react";

interface PiePlotProps {
  data: TYPE.PiePlotDataProps[];
}

const PiePlot: React.FC<PiePlotProps> = ({ data }) => {
  const G = G2.getEngine("canvas");

  const container = useRef(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }
    const pie = new Pie(container.current, {
      appendPadding: 30,
      data,
      angleField: "completed",
      colorField: "priority",
      label: {
        type: "spider",
        labelHeight: 40,
        formatter: (data, mappingData) => {
          const group = new G.Group({});
          group.addShape({
            type: "text",
            attrs: {
              x: 10,
              y: 8,
              text: `${data.priority}`,
              fill: mappingData.color,
            },
          });
          group.addShape({
            type: "text",
            attrs: {
              x: 0,
              y: 25,
              text: `${data.completed}个 ${(
                (data.completed / data.uncompleted) *
                100
              ).toFixed(2)}%`,
              fill: "rgba(0, 0, 0, 0.65)",
              fontWeight: 500,
            },
          });
          return group;
        },
      },
    });
    pie.render();
  }, []);

  return <div ref={container}></div>;
};

export default PiePlot;
