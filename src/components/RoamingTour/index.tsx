import { AimOutlined } from "@ant-design/icons";
import type { TourProps } from "antd";
import { Button, Space, Tour } from "antd";
import { useCallback, useState } from "react";

interface RoamingTourProps {
  steps: {
    title: string;
    description: string;
    target: () => any;
    onChange?: () => any;
    placement?: string;
  }[];
  onClose?: () => any;
}

const RoamingTour: React.FC<RoamingTourProps & TourProps> = (props) => {
  const { steps, onClose: extraClose, ...others } = props;
  const [open, setOpen] = useState<boolean>(false);

  const stepsList = steps?.map((item) => ({
    title: (
      <Space>
        <AimOutlined style={{ fontSize: "26px" }} />
        <span>{item.title}</span>
      </Space>
    ),
    description: item.description,
    target: item.target,
    placement: item.placement,
  }));

  const onChange = useCallback(
    (current: number) => {
      steps[current]?.onChange?.();
    },
    [steps],
  );

  const onClose = () => {
    setOpen(false);
    extraClose?.();
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>TourBegin</Button>
      <Tour
        // mask={false}
        arrow={false}
        open={open}
        onClose={() => onClose()}
        steps={stepsList}
        indicatorsRender={(value, total) => (
          <div>{`第 ${value + 1} 步，共 ${total} 步`}</div>
        )}
        placement="bottomRight"
        onChange={(current) => onChange(current)}
        {...others}
      />
    </>
  );
};

export default RoamingTour;
