import { Statistic, StatisticProps } from "antd";
import { useCallback } from "react";
import CountUp from "react-countup";

/**
 * unit: 统计单位，默认为空
 * separator: 千分位分离符号，默认为,
 */

interface IProps {
  unit?: string;
  separator?: string;
}

const SStatistic: React.FC<StatisticProps & IProps> = (props) => {
  const { unit = "", separator = "," } = props;
  const formattingFn = useCallback((value: number) => {
    const formatValue = value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return `${formatValue}${unit}`;
  }, []);
  const formatter = (value: number) => (
    <CountUp
      duration={1}
      decimals={props.precision}
      end={value}
      formattingFn={formattingFn}
    />
  );
  return <Statistic formatter={formatter} {...props} />;
};

export default SStatistic;
