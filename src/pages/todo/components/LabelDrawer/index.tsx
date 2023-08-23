import { useModel } from "@umijs/max";
import { Button, Drawer, Space, Tag } from "antd";
import { useState } from "react";
import EditLabel from "./Edit";
import styles from "./index.less";

interface LabelDrawerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const LabelDrawer: React.FC<LabelDrawerProps> = ({ open, setOpen }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [type, setType] = useState<"VIEW" | "EDIT">("EDIT");
  const [initValue, setInitValue] = useState<any>({});
  const { labels } = useModel("labels", (model) => ({
    labels: model.labels,
  }));
  return (
    <>
      <Drawer
        open={open}
        autoFocus
        title="标签管理"
        maskClosable
        onClose={() => {
          setOpen(false);
        }}
        size="large"
        extra={
          <Space>
            <Button
              onClick={() => {
                setType("EDIT");
                setInitValue({
                  value: "",
                  label: "",
                  color: "",
                  id: "",
                });
                setEditOpen(true);
              }}
            >
              创建标签
            </Button>
          </Space>
        }
      >
        <Space direction="vertical">
          <span>标签总览</span>
          <Space>
            {labels.map((label) => (
              <Tag
                // closeIcon
                // onClose={(e) => {
                //   e.preventDefault();
                // }}
                onClick={() => {
                  setType("VIEW");
                  setInitValue(label);
                  setEditOpen(true);
                }}
                className={styles.tags}
                key={label.id}
                color={label.color}
              >
                {label.label}
              </Tag>
            ))}
          </Space>
        </Space>
        <EditLabel
          type={type}
          open={editOpen}
          setOpen={setEditOpen}
          initValue={initValue}
          setInitValue={setInitValue}
        ></EditLabel>
      </Drawer>
    </>
  );
};

export default LabelDrawer;
