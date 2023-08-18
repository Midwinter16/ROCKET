import { Drawer, Button, Space } from "sensd";

interface EditableViewerProps {
  visible: boolean,
  setVisible: (visible: boolean) => void,
  title: string
}

const EditableViewer: React.FC<EditableViewerProps> = ({ visible, setVisible, title }) => {
  const onSave = () => {
    console.log('create')
  }
  return <Drawer
    visible={visible}
    autoFocus
    title={title}
    maskClosable
    onClose={() => setVisible(false)}
    extra={
      <Space size="middle">
        <Button onClick={() => setVisible(false)}>取消</Button>
        <Button onClick={onSave} type="primary">
          保存
        </Button>
      </Space>
    }>
    123
  </Drawer>
}

export default EditableViewer