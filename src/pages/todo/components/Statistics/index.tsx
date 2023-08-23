import SStatistic from "@/components/SStatistic";
import { formatColumnPlotData, formatPiePlotData } from "@/utils/utils";
import { useModel } from "@umijs/max";
import { Card, Col, Row, Statistic } from "antd";
import ColumnPlot from "./Plot/ColumnPlot";
import PiePlot from "./Plot/PiePlot";
import styles from "./index.less";

const { Countdown } = Statistic;

interface IProps {
  setActiveTag: (value: string) => void;
}

const Statistics: React.FC<IProps> = ({ setActiveTag }) => {
  const { expiring } = useModel("todos", (model) => ({
    expiring: model.getExpiring,
  }));
  const { user } = useModel("user", (model) => ({
    user: model.getUser,
  }));

  return (
    <>
      <Row style={{ marginBottom: "20px" }} justify={"space-around"}>
        <Col span={7}>
          <Card title="完成数" bordered={false} style={{ height: "100%" }}>
            <SStatistic value={112893} precision={0} />
          </Card>
        </Col>
        <Col span={7}>
          <Card title="完成率" bordered={false} style={{ height: "100%" }}>
            <SStatistic value={55.55} precision={2} unit={"%"} />
          </Card>
        </Col>
        <Col span={7}>
          <Card
            title="最快逾期任务"
            bordered={false}
            style={{ height: "100%" }}
          >
            {expiring ? (
              <>
                <span
                  className={styles.expiring}
                  onClick={() => {
                    setActiveTag("1");
                  }}
                >
                  待办名称：{expiring.title}
                </span>
                <Countdown
                  value={expiring.deadline}
                  format="D 天 H 时 m 分 s 秒"
                />
              </>
            ) : (
              <div style={{ fontSize: "20px" }}>暂无临近逾期任务</div>
            )}
          </Card>
        </Col>
      </Row>
      <Row justify={"space-around"}>
        <Col span={11}>
          <Card title="饼图待办统计" bordered={false} style={{ width: "100%" }}>
            {user && <PiePlot data={formatPiePlotData(user)}></PiePlot>}
          </Card>
        </Col>
        <Col span={11}>
          <Card title="柱图待办统计" bordered={false} style={{ width: "100%" }}>
            {user && (
              <ColumnPlot data={formatColumnPlotData(user)}></ColumnPlot>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Statistics;
