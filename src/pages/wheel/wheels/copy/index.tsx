import { Button, Input, Space, message } from "antd";
import { useState } from "react";

/**
 * navigator.clipboard 方法实现复制粘贴
 */
const Copy = () => {
  const [main, setMain] = useState("");
  const [sub, setSub] = useState("");

  const ellipsis = (text: string) => {
    if (text.length > 10) return `${text.slice(0, 10)}...`;
    return text;
  };
  const copyClipboard = async () => {
    if (main.length === 0) {
      message.info(`请输入内容`);
      return;
    }
    await navigator.clipboard.writeText(main);
    message.info(`复制文本 ${ellipsis(main)} 成功`);
  };
  const pasteClipboard = async () => {
    const content = await navigator.clipboard.readText();
    setSub(content);
  };

  return (
    <div className="body-container">
      <Space direction="vertical">
        <Space>
          <Input.TextArea
            value={main}
            onChange={(e) => setMain(e.target.value)}
            rows={3}
          ></Input.TextArea>
          <Button onClick={copyClipboard}>复制</Button>
        </Space>
        <Space>
          <Input.TextArea value={sub} rows={3}></Input.TextArea>
          <Button onClick={pasteClipboard}>粘贴</Button>
        </Space>
      </Space>
    </div>
  );
};
export default Copy;
