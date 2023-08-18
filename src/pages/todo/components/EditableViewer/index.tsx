import { Button, Drawer, Space } from "antd";

interface EditableViewerProps {
  open: boolean;
  setOpen: (visible: boolean) => void;
  title: string;
}

const EditableViewer: React.FC<EditableViewerProps> = ({
  open,
  setOpen,
  title,
}) => {
  const onSave = () => {
    console.log("create");
  };
  return (
    <Drawer
      open={open}
      autoFocus
      title={title}
      maskClosable
      onClose={() => setOpen(false)}
      extra={
        <Space size="middle">
          <Button onClick={() => setOpen(false)}>取消</Button>
          <Button onClick={onSave} type="primary">
            保存
          </Button>
        </Space>
      }
    >
      123
    </Drawer>
  );
};

export default EditableViewer;
