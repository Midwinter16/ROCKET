import { Column } from "@antv/g2plot";
import { useEffect, useRef } from "react";

interface ColumnPlotProps {
  data: TYPE.ColumnPlotDataProps[];
}

const ColumnPlot: React.FC<ColumnPlotProps> = ({ data }) => {
  // const { data, xField, yField } = columnData;

  const container = useRef(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }
    const column = new Column(container.current, {
      data,
      isStack: true, // 是否堆叠柱状图，堆叠柱状图必开
      xField: "priority", // 对应 data 中的 priority，x 轴数值
      yField: "value", // 对应 data 中的 value，y 轴数值
      seriesField: "type", // 根据 data 中的 type 不同来渲染不同颜色的柱
      legend: false,
    });
    column.render();
  }, []);

  return <div ref={container} />;
};

export default ColumnPlot;
